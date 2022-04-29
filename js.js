/** @format */
// console.log('Hello world');
// console.warn("This is warning");
// console.error("This is error");
// console.time("This is time ");

// var number1=24;
// var number2=30;
// console.log(number1+number2);

// // String;
// var str1="This is string";
// var num1="This is also string";


// //multiple string
// var marks = {
//     suraj:99,
//     rahul:98,
//     vesh:97
//  }
// console.log(marks);

// var n=null;
// console.log(n);

// var und=undefined;
// console.log(und);

// var arr =[1,2,"babu",4,5];
// console.log(arr);

// //operators in javascript
// var a=100;
// var b=10;
// console.log("The value of a + b is", a+b);
// console.log("The value of a - b is", a-b);
// console.log("The value of a * b is", a*b);
// console.log("The value of a / b is", a/b);

// //comparison operators
// var a=34;
// var b=24;
// console.log(a>b);
// console.log(a<b);
// console.log(a<=b);
// console.log(a>=b);
// console.log(a==b);

// // logical operators
// //Logical and operators
// console.log(true && true);
// console.log(true && false);
// console.log(false && true);
// console.log(false && false);

// //Logical or operators
// console.log(true || true);
// console.log(true ||false);
// console.log(false || true);
// console.log(false || false);

// //logical not operators
// console.log(!true);
// console.log(!false);

// //function 
// function avg(a,b)
// {
//    c= (a+b)/2;
//     return c;
// }

// c1 = avg(5,5);
// c2 =avg(10,5);
// console.log(c1,c2);

// //Conditionals in javascript
// var age=12;
// if(age > 13)
// {
//     console.log("They can drink beer");
// }
// else{
//     console.log("They can not drink beer");
// }

// //Ladder types else-if
//   var age=10;
//  if(age > 18)
//  {
//      console.log("They can drink beer");
//  }
// else if(age > 20)
// {
//     console.log("They can go for picnic");
// }
// else if(age > 23){
//     console.log("They can go for bikeride");
// }
// else if(age > 25)
// {
//     console.log("They can go for clube");
// }
// console.log("They can play any games");

// //using function for who is iligebal of not
// function agelimited(age)
// {
//     if(age > 15)
//     {
//         console.log("They can go for running");
//     }
//     else{
//         console.log("They can go for long drive");
//     }
// }
// c1 =agelimited(10);

// //for loop 
// var arr=[1,2,3,4,5,6,7];
// console.log(arr);
// for(var i=0;i<arr.length;i++)
// {
//     console.log(arr[i]);
// }

// //shotcut for loop  in javascript
// arr.forEach(function(element)
// {
//     console.log(element);
// })

// //while loop in javascript 
// var j=0;
// while(j<arr.lenght)
// {
//     console.log(arr[j]);
//     j++;
// }

// //do while loop in javascript 
// var arr=[4,5,6];
// do{
//     console.log(arr[j]);
//     j++;
// }while(j<arr.lenght)

// //Break and Continue 
// for (var i=0;i<arr.length;i++)
// {
//     if(i==1){
//        // break;  //Break statement break the loop from where we put the condition like i=2;
//        continue;
//     }
//     console.log(arr[i]);
// }

let Arrlist=["Laxmi","Soni",7,"null"];
// console.log(Arrlist.length);
// Arrlist.pop();
// Arrlist.push("suraj");
// Arrlist.shift();
// Arrlist.unshift("chanda");
// console.log(Arrlist.unshift("Tinky"));
//  const newline=Arrlist.unshift("Tinky");
// console.log(newline);
// // console.log(Arrlist);

// const mygirls=["Laxmi","Soni","Tinky","mami"];
// const myboys=["Ram","suraj","Bhola","Shaym","Amit"];

// const mycollection=mygirls.concat(myboys);
// console.log(mycollection);


// //string use in javascript
// let mystring="I am want to be a good programmar";
// console.log(mystring.length);
// console.log(mystring.indexOf("want"));
// console.log(mystring.slice(1,4));
// d=mystring.replace("I","suraj");
// console.log(d,mystring);



// //date use in javascript
// let mydata=new Date();
// console.log(mydata);
// console.log(mydata.getTime());
// console.log(mydata.getDay());
// console.log(mydata.getMonth());

//Doument use in javascript
//  let elem = document.getElementById("click");
// console.log(elem);
//  let elemclass = document.getElementsByClassName('container');
// console.log(elemclass);
// // elemclass[0].style.background ='yellow';
// elemclass[0].classList.add("bg-primary");
// // elemclass[0].classList.add("text-success");

// elemclass[0].classList.remove("text-success");
// console.log(elem.innerHTML);
// console.log(elem.innerText);

// console.log(elemclass[0].innerHTML);
// console.log(elemclass[0].innerText);

// tn=document.getElementsByTagName('div');
// console.log(tn);

// //Appendchild means to add things.
// let createdElement=document.createElement('p');
// createdElement.innerText="This is me";
// tn[0].appendChild(createdElement);


// // //Here replacechild means to replace the value or things to old value or things.
// let createdElement2=document.createElement('b');
// createdElement2.innerText="This  is bold";
// tn[0].replaceChild(createdElement2 ,createdElement);

// //selectin query
// let sel=document.querySelector('.container');
// console.log(sel);
// let sell=document.querySelectorAll('.container');
// console.log(sell);


//Events in javascript
// firstid.addEventListener('click',function() {
//     console.log("click on me");
// })

// firstid.addEventListener('mouseover',function() {
//     console.log("click over the container ");
// })

// firstid.addEventListener('mouseout',function() {
//     console.log("click out the container");
// })

// firstid.addEventListener('mouseon',function() {
//     console.log("click on the container");
// })

// firstid.addEventListener('mouseup',function() {
//     console.log("click up the container");
// })

// firstid.addEventListener('mousedown',function() {
//     console.log("click down the container");
// })


// // Arrow function
// function summ(a,b){
//     return a+b;

// }
//insted of write above fucntion in javascript we also write function like writen in below.
summ=(a,b)=>{
    return a+b;
}

// setTimeout and setInterval
logkaro=()=>{
    console.log("I am your log")
   
}
// setTimeout(logkaro ,2000);//setTimeout run in two second bcoz here is 2000mlisec so
clr=setInterval(logkaro,2000); //setInterval run in two second but continusely
//Use clearInterval(clr)/clearTimeout(clr) to cancel setInterval/setTimeout.

// //javascript localstorage

// localStorage.setItem('name','suraj')
// undefined
// localStorage.getItem('name')
// "suraj"

//JSON stands for (Java script object Notation)
obj ={name: "suraj",length:1, a:{this: 'tha"t'}}
jso =JSON.stringify(obj);
console.log(jso);

parsed=JSON.parse(`{"suraj",length:1}`)
console.log(parsed);