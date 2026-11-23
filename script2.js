
const carouselLeftBtn = document.getElementById("carousel-left-btn");
const carouselRightBtn = document.getElementById("carousel-right-btn");

const carouselList = document.querySelector(".carousel-list");
const carouselItem = document.querySelectorAll(".carousel-item");

const numImage = carouselItem.length;

let start = 0;

const end = 100 * (numImage - 1);

function renderCarousel() {
    carouselList.style.transform = `translateX(-${start}%)`;
}

function handleLeftBtn() {
    if (start > 0) {
        start -= 100;
    } else {
        start = end;
    }

    renderCarousel();
}

function handleRightBtn() {
    if (start < end) {
        start += 100;
    } else {
        start = 0;
    }

    renderCarousel();
}

carouselLeftBtn.addEventListener("click", handleLeftBtn);
carouselRightBtn.addEventListener("click", handleRightBtn);

setInterval(handleRightBtn, 2000);
