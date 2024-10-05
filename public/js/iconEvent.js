let sliderContainer = document.getElementById('sliderContainer');
let slider = document.getElementById('slider');
let cards = document.getElementsByTagName('li');

let elementsToShow = 3;

let sliderContainerWidth = sliderContainer.clientWidth;

let cardWidth = sliderContainerWidth/elementsToShow;

slider.style.width = cards.length*cardWidth+'px';

for(let index = 0; index < cards.length; index++){
    const element = cards[index];
    element.style.width = cardWidth+'px';
}

// function prev(){
//     if ( +slider.style.marginLeft.slice(0, -2) != -cardWidth * (cards.length - elementsToShow))
//         slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) - cardWidth) + 'px';
// }

// function next(){
//     if ( +slider.style.marginLeft.slice(0, -2) != 0)
//         slider.style.marginLeft = ((+slider.style.marginLeft.slice(0, -2)) + cardWidth) + 'px';
// }
function prev() {
    const currentMargin = +slider.style.marginLeft.slice(0, -2);

    if (currentMargin < 0) {
        const newMargin = Math.max(currentMargin + cardWidth, -cardWidth * (cards.length - elementsToShow));
        slider.style.marginLeft = newMargin + 'px';
    }
}

function next() {
    const currentMargin = +slider.style.marginLeft.slice(0, -2);
    // const maxMargin = 0;

    if (currentMargin > -cardWidth * (cards.length - elementsToShow)) {
        const newMargin = Math.min(currentMargin - cardWidth);
        slider.style.marginLeft = newMargin + 'px';
    }
}
