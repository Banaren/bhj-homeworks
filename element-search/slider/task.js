const slides = Array.from(document.querySelectorAll(".slider__item"));


const arrowRight = document.querySelector('.slider__arrow_next');
const arrowLeft = document.querySelector('.slider__arrow_prev');

let slide = 0;

arrowRight.onclick = function () {
    if (slide == (slides.length - 1)) {
        slides[0].classList.add(`slider__item_active`);
        slides[slide].classList.remove(`slider__item_active`);
        slide = 0        
    } else {
        slides[slide + 1].classList.add(`slider__item_active`);
        slides[slide].classList.remove(`slider__item_active`);
        slide++
    }
}

arrowLeft.onclick = function () {
    if (slide == 0) {
        slides[slides.length - 1].classList.add(`slider__item_active`);
        slides[0].classList.remove(`slider__item_active`);
        slide = slides.length - 1               
    } else {
        slides[slide - 1].classList.add(`slider__item_active`);
        slides[slide].classList.remove(`slider__item_active`);
        slide -=1 
    }
}