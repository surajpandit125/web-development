/** @format */
burger=document.querySelector('.burger');
navbar=document.querySelector('.navbar');
navlist=document.querySelector('.navlist');
searchbar=document.querySelector('.searchbar');

burger.addEventListener('click', ()=>{
    searchbar.classList.toggle('v-class');
    navlist.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})