// let musicName = document.querySelector(".container .music-details .music-name");
// let artistName = document.querySelector(".container .music-details .artist-name");
// let img = document.querySelector(".container .music-img-box .music-img img");
// let music = document.querySelector(".container #music");
// let playPauseBtn = document.querySelector(".container .btns-box .btns .play-pause-btn");

// let musicIndex = 2;

// window.addEventListener("load", ()=>{
//     loadMusic();
// })

// let loadMusic =()=>{
//     musicName.innerHTML = `${allmusic[musicIndex - 1].name}`;
//     artistName.innerHTML = `${allmusic[musicIndex - 1].artist}`;
//     img.src = `${allmusic[musicIndex - 1].img}.jpg`;
//     music.src = `${allmusic[musicIndex - 1].src}.mp3`;
// }

// playPauseBtn.addEventListener("click", ()=>{
//     if(playPauseBtn.classList.contains("play")){
//         playPauseBtn.classList.replace("play", "paused");
//         playPauseBtn.querySelector(".material-icons").innerHTML = "pause";
//         music.play();
//     }else{
//         playPauseBtn.classList.replace("paused", "play");
//         playPauseBtn.querySelector(".material-icons").innerHTML = "play_arrow";
//         music.pause();

//     }
// })

const menuIcon = document.querySelector('#menu-icon');
const navLinks = document.querySelector('.nav-links');

menuIcon.onclick = () => {
    navLinks.classList.toggle('active');
};
