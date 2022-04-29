// const parentid= document.getElementById('parentid');
// const childid =document.getElementById('childid');

// const parentcall = () => {
//     alert('parent call');
// }

// const childcall = () => {
//  alert('child call');
// //  event.stopPropagation(); //this event one run one at a time
// }

// ///If we use third parameter like false then firstly run child then parentd
// ///If we use third parameter like true then  firstly run parent then child

// parentid.addEventListener('click',parentcall,false);
// childid.addEventListener('click',childcall,false);

// upper javascript program of thapa html 

// Bascilly it is used to make  calulater with callback function and

const add = (a,b) => {
    return a+b;
}
console.log(add(5,7));