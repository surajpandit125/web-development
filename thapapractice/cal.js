const add = (a,b) => {
    return a+b;
}
// console.log(add(5,5));

const subs = (a,b) => {
    return Math.abs(a-b);
}
// console.log(subs(4,5));

const multi = (a,b) => {
    return a*b;
}
// console.log(5,5);

const div = (a,b) => {
    return a/b;
}

// console.log(div(5,5));
//Insted  of writing console in all operator we make one function that is called callback fucntion

const calulater = (num1,num2,operator) => {
    return operator(num1,num2);
}
console.log(calulater(5,5,add));

//calculater function is called higher order function bcoz take all fucntion in one parameter 
//add,multi,div etc is called callback fucntion