var URL = window.URL || window.webkitURL

var videoPlayer = document.getElementById('player');

function videoDefaultSize(){
  videoPlayer.style.width = "50%";
}

function video2XSize(){
  videoPlayer.style.width = "100%";
}

var playSelectedFile = function (event) {
  var file = this.files[0]
  var type = file.type
  var videoNode = document.querySelector('video')
  var canPlay = videoNode.canPlayType(type)
  if (canPlay === '') canPlay = 'no'
  var isError = canPlay === 'no'

  if (isError) {
    return
  }

  var fileURL = URL.createObjectURL(file)
  videoNode.src = fileURL
}

var inputNode = document.querySelector('#selector')
inputNode.addEventListener('change', playSelectedFile, false)