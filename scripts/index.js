'use strict';

/* function ChangeOpacity(index) {
    const section = document.querySelector(`.content-${index}`);
    const hideSliderN = document.querySelector(`.slider${index}`);

    section.style.display = 'flex';
    hideSliderN.style.display = 'block';
}
 */
///////////////////////////SLYDER/////////////////////////////

const btnLeft1 = document.querySelectorAll('.slider__btn--left1');
const btnRight1 = document.querySelectorAll('.slider__btn--right1');
const sliders = document.querySelectorAll('.slide1');
const slidesNumber = sliders.length;
const dotContainer = document.querySelector('.dots1');

let currentSlide = 0;

const mooveToSlide = function (slide) {
    sliders.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
};

////////////dots slide
const createDots = function () {
    sliders.forEach(function (_, index) {
        dotContainer.insertAdjacentHTML('beforeend', `<button class="dots__dot1" data-slide="${index}"></button>`);
    });
};
createDots();

dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot1')) {
        const slide = e.target.dataset.slide;
        mooveToSlide(slide);
        activDot(slide);
    }
});

const activDot = function (slide) {
    document.querySelectorAll('.dots__dot1').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot1[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activDot(0);
//////mouse click slide

const nextSlide = function () {
    if (currentSlide === slidesNumber - 1) {
        currentSlide = 0;
    } else {
        currentSlide += 1;
    }
    mooveToSlide(currentSlide);
    activDot(currentSlide);
};

const previousSlide = function () {
    if (currentSlide === 0) {
        currentSlide = slidesNumber - 1;
    } else {
        currentSlide -= 1;
    }
    mooveToSlide(currentSlide);
    activDot(currentSlide);
};

mooveToSlide(0);
btnRight1.forEach(a => a.addEventListener('click', nextSlide));
btnLeft1.forEach(a => a.addEventListener('click', previousSlide));

////btn mooveslide
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide();
    } else if (e.key === 'ArrowLeft') {
        previousSlide();
    }
});

/* /////////////// SLYDER_2 //////////////////*/
const btnLeft2 = document.querySelectorAll('.slider__btn--left2');
const btnRight2 = document.querySelectorAll('.slider__btn--right2');
const sliders2 = document.querySelectorAll('.slide2');
const slides2Number = sliders2.length;
const dot2Container = document.querySelector('.dots2');

let currentSlide2 = 0;

const mooveToSlide2 = function (slide) {
    sliders2.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
};

////////////dots slide
const createDots2 = function () {
    sliders2.forEach(function (_, index) {
        dot2Container.insertAdjacentHTML('beforeend', `<button class="dots__dot2" data-slide="${index}"></button>`);
    });
};
createDots2();

dot2Container.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot2')) {
        const slide = e.target.dataset.slide;
        mooveToSlide2(slide);
        activDot2(slide);
    }
});

const activDot2 = function (slide) {
    document.querySelectorAll('.dots__dot2').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot2[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activDot2(0);
//////mouse click slide

const nextSlide2 = function () {
    if (currentSlide2 === slides2Number - 1) {
        currentSlide2 = 0;
    } else {
        currentSlide2 += 1;
    }
    mooveToSlide2(currentSlide2);
    activDot2(currentSlide2);
};

const previousSlide2 = function () {
    if (currentSlide2 === 0) {
        currentSlide2 = slides2Number - 1;
    } else {
        currentSlide2 -= 1;
    }
    mooveToSlide2(currentSlide2);
    activDot2(currentSlide2);
};

mooveToSlide2(0);
btnRight2.forEach(a => a.addEventListener('click', nextSlide2));
btnLeft2.forEach(a => a.addEventListener('click', previousSlide2));

////btn mooveslide
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide2();
    } else if (e.key === 'ArrowLeft') {
        previousSlide2();
    }
});

/* /////////////// SLYDER_3 //////////////////*/
const btnLeft3 = document.querySelectorAll('.slider__btn--left3');
const btnRight3 = document.querySelectorAll('.slider__btn--right3');
const sliders3 = document.querySelectorAll('.slide3');
const slides3Number = sliders3.length;
const dot3Container = document.querySelector('.dots3');

let currentSlide3 = 0;

const mooveToSlide3 = function (slide) {
    sliders3.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
};

////////////dots slide
const createDots3 = function () {
    sliders3.forEach(function (_, index) {
        dot3Container.insertAdjacentHTML('beforeend', `<button class="dots__dot3" data-slide="${index}"></button>`);
    });
};
createDots3();

dot3Container.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot3')) {
        const slide = e.target.dataset.slide;
        mooveToSlide3(slide);
        activDot3(slide);
    }
});

const activDot3 = function (slide) {
    document.querySelectorAll('.dots__dot3').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot3[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activDot3(0);
//////mouse click slide

const nextSlide3 = function () {
    if (currentSlide3 === slides3Number - 1) {
        currentSlide3 = 0;
    } else {
        currentSlide3 += 1;
    }
    mooveToSlide3(currentSlide3);
    activDot3(currentSlide3);
};

const previousSlide3 = function () {
    if (currentSlide3 === 0) {
        currentSlide3 = slides3Number - 1;
    } else {
        currentSlide3 -= 1;
    }
    mooveToSlide3(currentSlide3);
    activDot3(currentSlide3);
};

mooveToSlide3(0);
btnRight3.forEach(a => a.addEventListener('click', nextSlide3));
btnLeft3.forEach(a => a.addEventListener('click', previousSlide3));

////btn mooveslide
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide3();
    } else if (e.key === 'ArrowLeft') {
        previousSlide2();
    }
});

/* /////////////// SLYDER_4 //////////////////*/
const btnLeft4 = document.querySelectorAll('.slider__btn--left4');
const btnRight4 = document.querySelectorAll('.slider__btn--right4');
const sliders4 = document.querySelectorAll('.slide4');
const slides4Number = sliders4.length;
const dot4Container = document.querySelector('.dots4');

let currentSlide4 = 0;

const mooveToSlide4 = function (slide) {
    sliders4.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
};

////////////dots slide
const createDots4 = function () {
    sliders4.forEach(function (_, index) {
        dot4Container.insertAdjacentHTML('beforeend', `<button class="dots__dot4" data-slide="${index}"></button>`);
    });
};
createDots4();

dot4Container.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot4')) {
        const slide = e.target.dataset.slide;
        mooveToSlide4(slide);
        activDot4(slide);
    }
});

const activDot4 = function (slide) {
    document.querySelectorAll('.dots__dot4').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot4[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activDot4(0);
//////mouse click slide

const nextSlide4 = function () {
    if (currentSlide4 === slides4Number - 1) {
        currentSlide4 = 0;
    } else {
        currentSlide4 += 1;
    }
    mooveToSlide4(currentSlide4);
    activDot4(currentSlide4);
};

const previousSlide4 = function () {
    if (currentSlide4 === 0) {
        currentSlide4 = slides4Number - 1;
    } else {
        currentSlide4 -= 1;
    }
    mooveToSlide4(currentSlide4);
    activDot4(currentSlide4);
};

mooveToSlide4(0);
btnRight4.forEach(a => a.addEventListener('click', nextSlide4));
btnLeft4.forEach(a => a.addEventListener('click', previousSlide4));

////btn mooveslide
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide4();
    } else if (e.key === 'ArrowLeft') {
        previousSlide4();
    }
});

/* /////////////// SLYDER_5 //////////////////*/
const btnLeft5 = document.querySelectorAll('.slider__btn--left5');
const btnRight5 = document.querySelectorAll('.slider__btn--right5');
const sliders5 = document.querySelectorAll('.slide5');
const slides5Number = sliders5.length;
const dot5Container = document.querySelector('.dots5');

let currentSlide5 = 0;

const mooveToSlide5 = function (slide) {
    sliders5.forEach((s, index) => (s.style.transform = `translateX(${(index - slide) * 100}%)`));
};

////////////dots slide
const createDots5 = function () {
    sliders5.forEach(function (_, index) {
        dot5Container.insertAdjacentHTML('beforeend', `<button class="dots__dot5" data-slide="${index}"></button>`);
    });
};
createDots5();

dot4Container.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot5')) {
        const slide = e.target.dataset.slide;
        mooveToSlide5(slide);
        activDot5(slide);
    }
});

const activDot5 = function (slide) {
    document.querySelectorAll('.dots__dot5').forEach(dot => dot.classList.remove('dots__dot--active'));
    document.querySelector(`.dots__dot5[data-slide="${slide}"]`).classList.add('dots__dot--active');
};
activDot5(0);
//////mouse click slide

const nextSlide5 = function () {
    if (currentSlide5 === slides5Number - 1) {
        currentSlide5 = 0;
    } else {
        currentSlide5 += 1;
    }
    mooveToSlide5(currentSlide5);
    activDot5(currentSlide5);
};

const previousSlide5 = function () {
    if (currentSlide5 === 0) {
        currentSlide5 = slides5Number - 1;
    } else {
        currentSlide5 -= 1;
    }
    mooveToSlide5(currentSlide5);
    activDot5(currentSlide5);
};
5;
mooveToSlide5(0);
btnRight5.forEach(a => a.addEventListener('click', nextSlide5));
btnLeft5.forEach(a => a.addEventListener('click', previousSlide5));

////btn mooveslide
document.addEventListener('keydown', function (e) {
    if (e.key === 'ArrowRight') {
        nextSlide5();
    } else if (e.key === 'ArrowLeft') {
        previousSlide5();
    }
});
