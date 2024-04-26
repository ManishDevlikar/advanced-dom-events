const slides = document.querySelectorAll(".slide");
const slider = document.querySelector(".slider");

let currentSlide = 0;

slider.style.transform = "scale(0.5)";
// slider.style.overflow = "hidden";

slides.forEach((s, i) => {
  s.style.transform = `translateX(${i * 100}%)`;
});

const goToSlide = function (currentS) {
  slides.forEach(function (s, i) {
    s.style.transform = `translateX(${(i - currentS) * 100}%)`;
  });
};

const slideRight = function () {
  if (currentSlide === slides.length - 1) {
    currentSlide = 0;
  } else {
    currentSlide++;
  }
  goToSlide(currentSlide);
};

const slideLeft = function () {
  if (currentSlide === 0) {
    currentSlide = slides.length - 1;
  } else {
    currentSlide--;
  }
  goToSlide(currentSlide);
};

document.addEventListener("keydown", (e) => {
  if (e.key === "ArrowLeft") {
    slideLeft();
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    slideRight();
  }
});
