const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky",window.scrollY > 0);
})
const nav_bar = document.getElementsByClassName("nav-bar")[0];
const menu = document.querySelector(".menu i");
menu.addEventListener("click",function(){
nav_bar.classList.toggle("nav-active");
menu.classList.toggle("bx-x");
menu.classList.toggle("menu-effect");
})

window.addEventListener("scroll",function(){
    nav_bar.classList.remove("nav-active",window.scrollY > 0);
    menu.classList.remove("bx-x");
})