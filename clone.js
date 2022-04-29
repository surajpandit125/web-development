console.log("welcome to spotify");
//Initilize the variable
let songIndex=0;
let audioElement =new Audio('1.mp3');
// let music =document.querySelector('audio');
let masterplay=document.getElementById('masterplay');
let myprogressbar =document.getElementById('myprogressbar');

let songs = [
    {songName:"salam-e-Ishq", filepath:"image/firstclone/clonemusic/1.mp3"},
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3"},
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
    {songName:"salam-e-Ishq", filepath:"CssTutarioal/image/firstclone/clonemusic/1.mp3" },
]

//Handle play/pause click
masterplay.addEventListener('click',()=>{
    if(audioElement.paused || music.currentTime <=0){
        audioElement.play();
    }
});
//Listen to Events
myprogressbar.addEventListener('timeupdate', ()=>{
    console.log('timeupdate');
    //Update Seekbar
})