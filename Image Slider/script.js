"use strict";

const body = document.body;
const sliders = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");

let activeSlide = 0; // Start from the first slide (index 0)

function setBgBody() {
    body.style.backgroundImage = sliders[activeSlide].style.backgroundImage;
}

setBgBody();

function setActiveSlide() {
    sliders.forEach((slide) => slide.classList.remove("active"));
    sliders[activeSlide].classList.add("active");
}

rightBtn.addEventListener('click', () => {
    nextSlide();
    setBgBody();
    setActiveSlide();
});
leftBtn.addEventListener('click', () => {
    prevslide();
    setBgBody();
    setActiveSlide();
});

function nextSlide(){
    activeSlide++;
    if (activeSlide > sliders.length - 1) {
        activeSlide = 0;
    }
}
function prevslide(){
    activeSlide--;
    if (activeSlide < 0) {
        activeSlide = sliders.length -1;
    }
}

setInterval(()=>{
    nextSlide();
    setBgBody();
    setActiveSlide();
},7000)