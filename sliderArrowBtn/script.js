const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");
const btnLeft = document.querySelector(".slider__btn--left");
const btnRight = document.querySelector(".slider__btn--right");

slider.style.transform = "scale(0.5)";
// slider.style.overflow = "visible";

slides.forEach(function (s, i) {
  s.style.transform = `translateX(${100 * i}%)`;
});

let currentSlide = 0;

btnRight.addEventListener("click", function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
});

btnLeft.addEventListener("click", function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
  });
});
