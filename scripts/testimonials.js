const slideshow = document.querySelector('.testimonials-slideshow');
let slides = document.querySelectorAll('.testimonial-cell');
let currentIndex = 0;
const firstClone = slides[0].cloneNode(true);
const lastClone = slides[slides.length - 1].cloneNode(true);
firstClone.id = "first-clone";
lastClone.id = "last-clone";
slideshow.appendChild(firstClone);
slideshow.insertBefore(lastClone, slides[0]);
slides = document.querySelectorAll('.testimonial-cell');
let slideWidth = slides[0].getBoundingClientRect().width;
slideshow.style.transform = `translateX(-${slideWidth}px)`;
currentIndex = 1;

function updateSlideWidth() {
    slideWidth = slides[0].getBoundingClientRect().width;
    slideshow.style.transition = "none"; // avoid flicker
    slideshow.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
}
window.addEventListener('resize', updateSlideWidth);

const dotsContainer = document.querySelector('.dots');
const realSlideCount = slides.length - 2;
let dots = [];

for (let i = 0; i < realSlideCount; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    if (i === 0) dot.classList.add('active');
    dotsContainer.appendChild(dot);
    dots.push(dot);

    dot.addEventListener('click', () => {
        moveToSlide(i + 1);
        updateDots(i);
    });
}

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function moveToSlide(index) {
    slideshow.style.transition = "transform 0.5s ease-in-out";
    slideshow.style.transform = `translateX(-${slideWidth * index}px)`;
    currentIndex = index;
}

document.querySelector('.next').addEventListener('click', () => {
    if (currentIndex >= slides.length - 1) return;
    moveToSlide(currentIndex + 1);
});

document.querySelector('.prev').addEventListener('click', () => {
    if (currentIndex <= 0) return;
    moveToSlide(currentIndex - 1);
});

slideshow.addEventListener('transitionend', () => {
    if (slides[currentIndex].id === "first-clone") {
        slideshow.style.transition = "none";
        currentIndex = 1;
        slideshow.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }
    if (slides[currentIndex].id === "last-clone") {
        slideshow.style.transition = "none";
        currentIndex = slides.length - 2;
        slideshow.style.transform = `translateX(-${slideWidth * currentIndex}px)`;
    }

    if (currentIndex > 0 && currentIndex < slides.length - 1) {
        updateDots(currentIndex - 1);
    }
});

setInterval(() => {
    if (currentIndex >= slides.length - 1) return;
    moveToSlide(currentIndex + 1);
}, 15000);