let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let songIndex = 0;
let myProgressBar = document.getElementById('myProgressBar');
let songGif = document.getElementById('gif');

// audioElement.play();
// let songs = [
//     {songName: "Let me love you", filePath: "songs/1.mp3", coverPath: "covers/1.jpg"},
//     {songName: "Trap", filePath: "songs/2.mp3", coverPath: "covers/2.jpg"},
//     {songName: "They Mad", filePath: "songs/3.mp3", coverPath: "covers/3.jpg"},
//     {songName: "Rich Kid", filePath: "songs/4.mp3", coverPath: "covers/4.jpg"},
//     {songName: "Song Title", filePath: "songs/5.mp3", coverPath: "covers/5.jpg"},
//     {songName: "The Safety Dance", filePath: "songs/6.mp3", coverPath: "covers/6.jpg"}
// ]

masterPlay.addEventListener('click', ()=>{
    if(audioElement.currentTime == 0 || audioElement.paused){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songGif.style.opacity = 1;
    } else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        songGif.style.opacity = 0;
    }
})

audioElement.addEventListener('timeupdate', ()=>{
    let progress = parseInt((audioElement.currentTime/audioElement.duration)*100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', ()=>{
    audioElement.currentTime = (myProgressBar.value*audioElement.duration) / 100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('play')).forEach((element)=>{
        element.classList.remove('fa-circle-pause');
        element.classList.add('fa-circle-play');
    })
}

Array.from(document.getElementsByClassName('play')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        makeAllPlays();
        console.log(e.target.id);
        songIndex = parseInt(e.target.id);
        e.target.classList.add('fa-circle-pause');
        e.target.classList.remove('fa-circle-play');
        audioElement.src = `songs/${songIndex}.mp3`;
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
        songGif.style.opacity = 1;
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex == 6){
        songIndex = 1;
    } else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songGif.style.opacity = 1;
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex == 1){
        songIndex = 6;
    } else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex}.mp3`;
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
    songGif.style.opacity = 1;
})