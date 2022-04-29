// const colors=["green","blue","rgba(133,122,200","#f15025"];

// const btn = document.getElementById("btn");
// const color= document.querySelector(".color");

// btn.addEventListener("click",function(){
//     //get random number between 0-3
//     const randomNumber =getRandomNumber();
//     document.body.style.backgroundColor=colors[randomNumber];
//     color.textContent=colors[randomNumber];
// });

// function getRandomNumber(){
//     return Math.floor(Math.random()*colors.length);
// }

const reviews=[
   {
    id:1,
    name:"susan smith",
    job:"Anoride",
    img:"https://wallup.net/old-people-men-wrinkled-face-monochrome-portrait/",
    title:"He is from nepal.he  reading in quest college.His branch is computer engineering.he is jobless",

   },
   {
    id:1,
    name:"Rohit sharma",
    job:"Anoride",
    img:"https://getwallpapers.com/wallpaper/full/4/e/6/15309.jpg",
    title:"He is from nepal.he  reading in quest college.His branch is computer engineering.he is jobless",

   },
  
{
    id:1,
    name:"Bram",
    job:"Anoride",
    img:"images/1.png.jpg",
    title:"He is from nepal.he  reading in quest college.His branch is computer engineering.he is jobless",

},
    
   {
    id:1,
    name:"Binit",
    job:"Anoride",
    img:"images/oldperson.jpg",
    title:"He is from nepal.he  reading in quest college.His branch is computer engineering.he is jobless",
   },

    {
        id:1,
    name:"Suraj",
    job:"Anoride",
    img:"images/suraj.jpg",
    title:"He is from nepal.he  reading in quest college.His branch is computer engineering.he is jobless",

    },
];


const img =document.getElementById("person-img");
const author = document.getElementById("author");
const job =document.getElementById("job");
const info =document.getElementById("info");

const prevBtn =document.querySelector(".prev-btn");
const nextBtn =document.querySelector(" .next-btn");
const randomBtn =document.querySelector(" .random-btn");

//set starting item
let currentItem=0;

//load intial item
window.addEventListener("DOMContentLoaded",function (){
   showPerson(currentItem);
});

function showPerson(currentItem){
    const item=reviews[currentItem];
    img.src=item.img;
    author.textContent =item.name;
    job.textContent=item.job;
    info.textContent=item.title;
}

nextBtn.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length-1){
        currentItem=0;
    }
    showPerson(currentItem);
});

prevBtn.addEventListener("click",function(){
    currentItem--;
    if(currentItem < 0){
        currentItem=reviews.length-1;
    }
    showPerson(currentItem);
});

randomBtn.addEventListener("click",function () {
    currentItem= Math.floor(Math.random()*reviews.length);
    console.log(currentItem);
    showPerson(currentItem);
})




