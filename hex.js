// const hex =[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

// const btn = document.getElementById('btn');
// const color = document.querySelector('.color');

// // first we have to print #
// btn.addEventListener("click",function(){
//  let hexcolor ="#";
//  for(let i=0;i<6;i++)
//  {
//       hexcolor += hex[getrandom()];
//  }
// color.textContent=hexcolor;
// document.body.style.backgroundColor=hexcolor;
// });

// function getrandom() {
// return Math.floor(Math.random() * hex.length);
// }
//Upper one is for color changing

///NOW
/// for counting the number for increase and decrease

//first set  initial count
let count=0;

const value =document.querySelector("#value");
const temp =document.querySelectorAll(".btn");

temp.forEach((btn) => {
     

     btn.addEventListener("click",function (e) {
          const styles =e.currentTarget.classList;
          if(styles.contains("decrease")){
               count--;
          }
        else if(styles.contains("increase")){
              count++;
         }else{
              count=0;
         }
         if(count<0){
              value.style.color="red";
         }
         if(count>0){
              value.style.color="green";
         }
         if(count==0){
              value.style.color="blue";
         }
          value.textContent=count;
          
     });
});

