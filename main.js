
let menu= document.querySelector(".menu");
let nav= document.querySelector("nav");
let close= document.querySelector(".close");


menu.onclick= function(){
    nav.classList="open";
}

close.onclick= function(){
    this.parentElement.classList.remove("open");
}

document.onkeyup= function(e){
    if(e.key=== "R"){
        nav.classList.remove("open");
    }
}