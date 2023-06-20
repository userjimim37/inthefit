let currentSlide = 0;
const slides = document.querySelectorAll('.slider img');
const slideDuration = 3000; // 15초

function showSlide(n) {
  slides.forEach((slide) => {
    slide.style.display = 'none';
  });
  slides[n].style.display = 'block';
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

function startSlideShow() {
  showSlide(currentSlide);
  setInterval(nextSlide, slideDuration);
}

startSlideShow();