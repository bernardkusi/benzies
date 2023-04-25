let bars=document.getElementsByClassName("bars")[0];
let nav=document.querySelector("nav");
let click=document.querySelector(".click");

document.addEventListener("scroll",()=>{
    if(window.scrollY>350){
        nav.classList.add("opaque")
    }else{
        nav.classList.remove("opaque")
    }
});

bars.addEventListener("click",()=>{
    nav.classList.toggle("active");
})