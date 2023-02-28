const left = document.querySelector(".left")
const right = document.querySelector(".right")
const slider = document.querySelector(".slider")
const images = document.querySelectorAll(".image")
const bottom = document.querySelectorAll(".button")


let slidenum = 1;
const length = images.length;
const nxtslide = ()=> {
    slider.style.transform = `translateX(-${slidenum * 800}px)`;
    slidenum++;
}
const prevslide = ()=> {
    slider.style.transform = `translateX(-${0}px)`;
    slidenum = 1;
}
const getlstslide = ()=> {
    slider.style.transform = `translateX(-${length -1 * 800}px)`;
    slidenum=1;
}

right.addEventListener("click",()=>{
    slidenum < length ? nxtslide() : prevslide() ;
})

left.addEventListener("click",()=>{
    slidenum > length ? getnxtslide() : prevslide() ;
})

for( let i = 0; i<length; i ++){
    const div = document.createElement("div");
    div.className= "button";
    bottom.appendchild(div)
}

const buttons = document.querySelectorAll("button");
buttons[0].style.backgroundColor ="white";

const resetbg=()=>{
    buttons.forEach(button=>{
        button.style.backgroundColor="transparent";
    })
}

// buttons.forEach(button,i)=>{
//     button.addEventListener

// }

