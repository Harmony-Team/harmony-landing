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

function burgerButton() {
    const burgerButton = document.querySelector(".main-nav__toggle");
    const nav = document.querySelector(".main-nav")
    burgerButton.addEventListener("click", () => {
        if(nav.classList.contains("main-nav--closed")) {
            nav.classList.remove("main-nav--closed");
            nav.classList.add("main-nav--opened");
        }
        else {
            nav.classList.remove("main-nav--opened");
            nav.classList.add("main-nav--closed");
        }
    })
}