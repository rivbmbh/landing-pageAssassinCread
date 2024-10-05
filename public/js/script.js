//DarkMode
    function toggleDarkMode(){
    if(localStorage.getItem("theme") === "dark"){
        localStorage.setItem("theme", "light");
        document.documentElement.classList.remove("dark");
    }else{
        localStorage.setItem("theme", "dark");
        document.documentElement.classList.add("dark");
    }
}

document
    .querySelector("#darkMode")
    .addEventListener("click", toggleDarkMode);
    if(localStorage.getItem("theme") === "dark"){
        document.documentElement.classList.add("dark");
    }
//  for dark mode responsive
document
    .querySelector("#darkMode2")
    .addEventListener("click", toggleDarkMode);
    if(localStorage.getItem("theme") === "dark"){
        document.documentElement.classList.add("dark");
    }

//END DARK MODE DOM

// burger nav
const burger = document.querySelector("#burger");
const listBurger = document.querySelector("#listBurger");
const closeBurger = document.querySelector("#closeBurger");


burger.addEventListener("click", function(){
    listBurger.classList.remove("hidden");
    listBurger.classList.add("inline-block");
});

// close burger
closeBurger.addEventListener("click", function(){
    listBurger.classList.remove("inline-block");
    listBurger.classList.add("hidden");
});


// --------------------------------------------------------------------------------------------------------------------

//card slider (Character)
const sliderContainer = document.querySelector("#sliderContainer");
const slider = document.querySelector("#slider");
const cards = slider.querySelectorAll("#slider li")[0];
const arrowIcons = document.querySelectorAll(".wrapper button");


let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = cards.clientWidth + 10;

arrowIcons.forEach(icon => {    
    icon.addEventListener("click", () => {
        slider.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
        slider.classList.add("scroll-smooth");
    }) 
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = slider.scrollLeft;
}

const dragging = (e) => {
    if(!isDragStart ) return;
    e.preventDefault();
    slider.classList.remove("scroll-smooth");
    let positionDiff = e.pageX - prevPageX;
    slider.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    slider.classList.remove("scroll-smooth");
    isDragStart = false;
}

slider.addEventListener("mousedown", dragStart);
slider.addEventListener("mousemove", dragging);
slider.addEventListener("mouseup", dragStop);
