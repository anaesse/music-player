var audio = document.getElementById('audio');
var pauseBtn = document.getElementById('pauseBtn');
var count = 0;
let seek_slider = document.querySelector('.seek_slider');
let volume_slider = document.querySelector('.volume_slider');
let curr_time = document.querySelector('.current-time');
// let total_duration = document.querySelector('.total-duration');

let duration = 0;
let myInterval; 

function playPause(){
    if(count == 0){
        count = 1;
        seek_slider.setAttribute("max", audio.duration)
        audio.play();
        pauseBtn.innerHTML = "&#9208;";
        myInterval = setInterval(myTimer, 1000);
        // start()
    }else{
        count = 0;
        audio.pause();
        seek_slider.setAttribute("max", audio.duration)

        pauseBtn.innerHTML = "&#9658;";
        myStopFunction();
        // clearInterval(start)
    }
}


function myTimer() {
    console.log(audio.currentTime)
    seek_slider.value = audio.currentTime
    duration = audio.currentTime;
}

function myStopFunction() {
  clearInterval(myInterval);
}


function stop(){
//   playPause()
  audio.pause();
  audio.currentTime = 0;
  seek_slider.setAttribute("min", "1")
  pauseBtn.innerHTML = "&#9658;";
  seek_slider.setAttribute("max", audio.duration)
  count=0;
//   clearInterval(start)
}

function seekTo(){
    // let seekto = audio.duration * (seek_slider.value / 100);
    audio.currentTime = seek_slider.value;
}

// const start = setInterval(()=> {
//     const progressPercent = (audio.currentTime / audio.duration) * 100;
//     console.log(progressPercent)
//     seek_slider.value = `${progressPercent}%`;
// },1000)
function setVolume(){
    audio.volume = volume_slider.value / 100;
}



