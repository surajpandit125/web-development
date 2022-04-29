/** @format */
console.log("script runnin..");
document.querySelector('.cross').style.display='none';
document.querySelector('.hambar').addEventListener("click",()=>{
    document.querySelector('.sidebar').classList.toggle('sidebarGO')
})