alert("welcome to amazon")

let current = 0;
const slides = document.querySelectorAll(".hero-slider img");

function changeSlide() {
    slides[current].classList.remove("active");
    slides[current].classList.add("prev");

    current = (current + 1) % slides.length;

    slides[current].classList.remove("prev");
    slides[current].classList.add("active");
}

setInterval(changeSlide, 3000); // har 3 sec me slide change
