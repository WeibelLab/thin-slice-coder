var URL = window.URL || window.webkitURL

var wavesurfer_script = document.createElement('script');  
wavesurfer_script.setAttribute('src','https://cdnjs.cloudflare.com/ajax/libs/wavesurfer.js/2.0.4/wavesurfer.min.js');
document.head.appendChild(wavesurfer_script);

var videoPlayer = document.getElementById('player');

function videoDefaultSize(){
  videoPlayer.style.width = "50%";
}

function video2XSize(){
  videoPlayer.style.width = "100%";
}

function loadWaveform(){
  var wavesurfer = WaveSurfer.create({
    container: document.querySelector('#audio-waveform'),
    waveColor: '#A8DBA8',
    progressColor: '#3B8686',
    backend: 'MediaElement'
  });
  
  // Load audio from existing media element
  var mediaElt = document.querySelector('video');
  
  wavesurfer.load(mediaElt);

  mediaElt.setAttribute("controls","controls");
}

var playSelectedFile = function (event) {
  var file = this.files[0];
  var type = file.type;
  var videoNode = document.querySelector('video');
  var canPlay = videoNode.canPlayType(type);
  if (canPlay === '') {canPlay = 'no'};
  var isError = canPlay === 'no';
  if (isError) {
    return;
  }

  var fileURL = URL.createObjectURL(file);
  videoNode.src = fileURL;
  loadWaveform();
}

var inputNode = document.querySelector('#selector')
inputNode.addEventListener('change', playSelectedFile, false)