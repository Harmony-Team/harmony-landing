let position = 0;

const container = document.querySelector(".screenshots__slider-container");
const item = document.querySelectorAll(".screenshots__slider-item");

const slidesToShow = 1;
const slidesToScroll = 1;
const itemWidth = container.offsetWidth / slidesToShow;

window.onload = init();

function init () {
    //install the item's width (ES6 operator)
    [...item].map(elem => {
        elem.style.minWidth = itemWidth + 'px';
    });

    console.log('works');
}

function buttonClick(index) {
    const track = document.querySelector(".screenshots__slider-track");
    const buttons = document.querySelectorAll(".screenshots__name");
    const currentButton = document.querySelector(".screenshots__name--current");
    let currentIndex = [...buttons].indexOf(currentButton);

    track.style.transform = `translateX(${(-1)*index*itemWidth}px)`;
    [...buttons][index].classList.add("screenshots__name--current");
    currentButton.classList.remove("screenshots__name--current");

}