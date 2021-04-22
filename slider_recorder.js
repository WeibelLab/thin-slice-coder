Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

var data = [];
var keyHeld = false;
var beepDelay = 0;

function toHMS(sec) {
    return new Date(sec * 1000.0).toISOString().substr(11, 11);
}

function toSeconds(hms) {
    var hms_split = hms.split(':');
    return (+hms_split[0]) * 60 * 60 + (+hms_split[1]) * 60 + (+hms_split[2] || 0);
}

var video_player = document.querySelector("video");

function checkVideo() {
    if(video_player.paused){
        return false;
    }
    else{
        return true;
    }
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function sliderOnKeydown(keyEvt) {
    var time_sec_start = video_player.currentTime;
    var time_hms_start = toHMS(time_sec_start);
    if(video_player.readyState != 4){
        console.log("video NOT loaded");
    }
    else if(checkVideo()) {
        in_data = {id: data.length, time_sec_start: time_sec_start, time_hms_start: time_hms_start, time_sec_end: null, time_hms_end: null, value: keyEvt};
        console.log("pressed " + keyEvt + " at " + time_hms_start);
    }else{
        console.log("video NOT playing");
    }
}

function sliderOnKeyup(keyEvt) {
    var time_sec_end = video_player.currentTime;
    var time_hms_end = toHMS(time_sec_end);
    if(video_player.readyState != 4){
        console.log("video NOT loaded");
    }
    else if(checkVideo()) {
        in_data.time_sec_end = time_sec_end;
        in_data.time_hms_end = time_hms_end;
        data.push(in_data);
        dt.load([in_data], true, true);
        in_data = null;
        console.log("released " + keyEvt + " at " + time_hms_end);
    }else{
        console.log("video NOT playing");
    }
}

function downloadData() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += getGlobalAffectInput();
    // csvContent += "id,time_sec_start,time_hms_start,time_sec_end,time_hms_end,value\n";
    // for(var key in data) {
    //     var id = data[key].id;
    //     var t_sec_start = data[key].time_sec_start;
    //     var t_hms_start = data[key].time_hms_start;
    //     var t_sec_end = data[key].time_sec_end;
    //     var t_hms_end = data[key].time_hms_end;
    //     var val = data[key].value;
    //     csvContent += id+","+t_sec_start+","+t_hms_start+","+t_sec_end+","+t_hms_end+","+val+"\n";
    // }
    var encodedUri = encodeURI(csvContent);
    var link = document.createElement("a");
    link.setAttribute("href", encodedUri);
    var out_path = inputNode.value.split("\\").slice(-1)[0].split(".")[0];
    link.setAttribute("download", out_path+".csv");
    document.body.appendChild(link); // Required for FF
    link.click();
}

document.onkeydown = checkKeyDown;
document.onkeyup = checkKeyUp;

function checkKeyDown(e) {
    if(keyHeld){
        return
    }
    else{
        keyHeld = true;
    }

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        sliderOnKeydown(1);
    }
    else if (e.keyCode == '40') {
        // down arrow
        sliderOnKeydown(-1);
    }
    else if (e.keyCode == '39') {
        // right arrow
        sliderOnKeydown(0);
    }

}

function checkKeyUp(e) {
    keyHeld = false;

    e = e || window.event;

    if (e.keyCode == '38') {
        // up arrow
        sliderOnKeyup(1);
    }
    else if (e.keyCode == '40') {
        // down arrow
        sliderOnKeyup(-1);
    }
    else if (e.keyCode == '39') {
        // right arrow
        sliderOnKeyup(0);
    }

}

video_player.onloadeddata = function(){
    createThinSlices();
};

a=new AudioContext() // browsers limit the number of concurrent audio contexts, so you better re-use'em

function beep(vol, freq, duration){
  v=a.createOscillator()
  u=a.createGain()
  v.connect(u)
  v.frequency.value=freq
  v.type="square"
  u.connect(a.destination)
  u.gain.value=vol*0.01
  v.start(a.currentTime)
  v.stop(a.currentTime+duration*0.001)
}

function setBeep(){
    var beepDelayMin;
    var beepDelaySec;
    var beepTimeMin = document.getElementById("beepTimMin");
    var beepTimSec = document.getElementById("beepTimSec");
    if (beepTimeMin.value != ""){
        beepDelayMin = parseInt(beepTimeMin.value, 10);
    }
    else{
        beepDelayMin = 0
    }
    if (beepTimSec.value != ""){
        beepDelaySec = parseInt(beepTimSec.value, 10);
    }
    else{
        beepDelaySec = 0
    }
    beepDelay = 60*beepDelayMin + beepDelaySec;
    // console.log("beep interval: "+beepDelay);
    if (beepDelay != 0){
        document.getElementById("selector").disabled = false;;
    }
    if (beepDelay == 0){
        document.getElementById("selector").disabled = true;;
    }
}

var beeped = false;
var $video = $('#player');
$video.on('timeupdate', function(event){
    if (Math.round(video_player.currentTime) != 0){
        if (video_player.currentTime % beepDelay < 0.4){
            if(Math.round(video_player.currentTime) % beepDelay == 0){
                if(!beeped){
                    beep(1, 280, 100);
                    beeped = true;
                }
                if(document.getElementById("autoPause").checked){
                    videoPlayer.pause();
                    openThinSlice(Math.round(video_player.currentTime) / beepDelay);
                }
            }
            
        }
        else{
            beeped = false;
        }
    }
});
