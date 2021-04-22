Object.defineProperty(HTMLMediaElement.prototype, 'playing', {
    get: function(){
        return !!(this.currentTime > 0 && !this.paused && !this.ended && this.readyState > 2);
    }
})

var data = [];
var keyHeld = false;
var beepDelay = 0;

$("#data-table").on('click', '.btnDelete', function () {
    var currentRow = $(this).closest("tr");
    var id = currentRow.find("td:eq(0)").text();
    removeData(id);
});

$("#data-table").on('click', '.timeSecVal', function () {
    var currentCell = $(this).closest("td");
    console.log("Scrubbing to", toHMS(currentCell.text()));
    video_player.currentTime = currentCell.text();
});

$("#data-table").on('click', '.timeHmsVal', function () {
    var currentCell = $(this).closest("td");
    console.log("Scrubbing to", currentCell.text());
    video_player.currentTime = toSeconds(currentCell.text());
});

var dynamicTable = (function() {    
    var _tableId, _table, 
        _fields, _headers, 
        _defaultText;

    var dt_div = document.getElementById("data-table-div");

    /** Builds the row with columns from the specified names. 
     *  If the item parameter is specified, the memebers of the names array will be used as property names of the item; otherwise they will be directly parsed as text.
     */
    function _buildHeader(names, item) {
        var row = '<tr>';
        if (names && names.length > 0)
        {
            $.each(names, function(index, name) {
                var c = item ? item[name+''] : name;
                row += '<td>' + c + '</td>';
            });
        }
        row += '</tr>';
        return row;
    }

    function _buildRowColumns(names, item) {
        var row = '<tr>';
        if (names && names.length > 0)
        {
            $.each(names, function(index, name) {
                var c = item ? item[name+''] : name;
                if(name == "time_sec_start" | name == "time_sec_end"){
                    row += '<td class="timeSecVal">' + c + '</td>';
                }
                else if(name == "time_hms_start" | name == "time_hms_end"){
                    row += '<td class="timeHmsVal">' + c + '</td>';
                }
                else{
                    row += '<td>' + c + '</td>';
                }                
            });
        }
        row += '<td><button class="btnDelete">Delete</button></td>';
        row += '</tr>';
        return row;
    }
    
    /** Builds and sets the headers of the table. */
    function _setHeaders() {
        // if no headers specified, we will use the fields as headers.
        _headers = (_headers == null || _headers.length < 1) ? _fields : _headers; 
        var h = _buildHeader(_headers);
        if (_table.children('thead').length < 1) _table.prepend('<thead></thead>');
        _table.children('thead').html(h);
    }
    
    function _setNoItemsInfo() {
        if (_table.length < 1) return; //not configured.
        var colspan = _headers != null && _headers.length > 0 ? 
            'colspan="' + _headers.length + '"' : '';
        var content = '<tr class="no-items"><td ' + colspan + ' style="text-align:center">' + 
            _defaultText + '</td></tr>';
        if (_table.children('tbody').length > 0)
            _table.children('tbody').html(content);
        else _table.append('<tbody>' + content + '</tbody>');
    }
    
    function _removeNoItemsInfo() {
        var c = _table.children('tbody').children('tr');
        if (c.length == 1 && c.hasClass('no-items')) _table.children('tbody').empty();
    }
    
    return {
        /** Configres the dynamic table. */
        config: function(tableId, fields, headers, defaultText) {
            _tableId = tableId;
            _table = $('#' + tableId);
            _fields = fields || null;
            _headers = headers || null;
            _defaultText = defaultText || 'No items to list...';
            _setHeaders();
            _setNoItemsInfo();
            return this;
        },
        /** Loads the specified data to the table body. */
        load: function(data, append, scroll) {
            if (_table.length < 1) return; //not configured.
            _setHeaders();
            _removeNoItemsInfo();
            if (data && data.length > 0) {
                var rows = '';
                $.each(data, function(index, item) {
                    rows += _buildRowColumns(_fields, item);
                });
                var mthd = append ? 'append' : 'html';
                _table.children('tbody')[mthd](rows);
                if (scroll) {
                    dt_div.scrollTop = dt_div.scrollHeight; // auto scroll to bottom
                }
            }
            else {
                _setNoItemsInfo();
            }
            return this;
        },
        /** Clears the table body. */
        clear: function() {
            _setNoItemsInfo();
            return this;
        }
    };
}());

function toHMS(sec) {
    return new Date(sec * 1000.0).toISOString().substr(11, 11);
}

function toSeconds(hms) {
    var hms_split = hms.split(':');
    return (+hms_split[0]) * 60 * 60 + (+hms_split[1]) * 60 + (+hms_split[2] || 0);
}

var dt = dynamicTable.config('data-table', ['id', 'time_sec_start', 'time_hms_start', 'time_sec_end', 'time_hms_end', 'value'], null, 'Nothing yet...');

function reindex(arr) {
    idx = 0;
    arr.forEach( function(row) {
        row.id = idx;
        idx++;
    });
}

function removeData(i) {
    data.splice(i, 1);
    reindex(data);
    dt.load(data, false, false);
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

var negativeButton = document.getElementById("negativeButton");
var neutralButton = document.getElementById("neutralButton");
var positiveButton = document.getElementById("positiveButton");

async function showFace(val) {
    if(val == -1){
        negativeButton.classList.add("selected");
    }
    else if(val == 0){
        neutralButton.classList.add("selected");
    }
    else if(val == 1){
        positiveButton.classList.add("selected");
    }
}

async function unshowFace(val) {
    if(val == -1){
        negativeButton.classList.remove("selected");
    }
    else if(val == 0){
        neutralButton.classList.remove("selected");
    }
    else if(val == 1){
        positiveButton.classList.remove("selected");
    }
}

function sliderOnKeydown(keyEvt) {
    var time_sec_start = video_player.currentTime;
    var time_hms_start = toHMS(time_sec_start);
    if(video_player.readyState != 4){
        console.log("video NOT loaded");
    }
    else if(checkVideo()) {
        in_data = {id: data.length, time_sec_start: time_sec_start, time_hms_start: time_hms_start, time_sec_end: null, time_hms_end: null, value: keyEvt};
        showFace(keyEvt);
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
        unshowFace(keyEvt);
        in_data = null;
        console.log("released " + keyEvt + " at " + time_hms_end);
    }else{
        console.log("video NOT playing");
    }
}

function downloadData() {
    let csvContent = "data:text/csv;charset=utf-8,";
    csvContent += getGlobalAffectInput();
    csvContent += "id,time_sec_start,time_hms_start,time_sec_end,time_hms_end,value\n";
    for(var key in data) {
        var id = data[key].id;
        var t_sec_start = data[key].time_sec_start;
        var t_hms_start = data[key].time_hms_start;
        var t_sec_end = data[key].time_sec_end;
        var t_hms_end = data[key].time_hms_end;
        var val = data[key].value;
        csvContent += id+","+t_sec_start+","+t_hms_start+","+t_sec_end+","+t_hms_end+","+val+"\n";
    }
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
    var beepTime = document.getElementById("beepTime");
    if (beepTime.value != ""){
        beepDelay = beepTime.value
    }
    else{
        beepDelay = 0
    }
}

var $video = $('#player');
var beeped = false;
$video.on('timeupdate', function(event){
    if (beepDelay != 0){
        console.log(video_player.currentTime)
        if(Math.round(video_player.currentTime) % beepDelay == 0){
            if(!beeped){
                beep(1, 280, 100);
                beeped = true;
            }
        }
        else{
            beeped = false;
        }
    }
});
