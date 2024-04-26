// -----------------------------  smooth scolling --------------------------------

/*
//  =================================method-1 -------------------------------------
const links = document.querySelectorAll(".link");
links.forEach(function (link) {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const href = this.getAttribute("href");
        document.querySelector(href).scrollIntoView({ behavior: "smooth" });
    });
});
*/

// ==================================method-2 --------------------------------------------
const navLinks = document.querySelector(".nav-ul");
navLinks.addEventListener("click", function (e) {
  e.preventDefault();
  if (e.target.classList.contains("link")) {
    let id = e.target.getAttribute("href");
    document.querySelector(id).scrollIntoView({ behavior: "smooth" });
  }
});

// --------------------------------------  sticky navbar ----------------------------------

const header = document.getElementById("header");
const navbar = document.getElementById("navbar");

const navHeight = navbar.getBoundingClientRect("navbar").height;

const navbarViewer = function (entries) {
  const [entry] = entries;
  if (!entry.isIntersecting) {
    navbar.classList.add("sticky");
  } else {
    navbar.classList.remove("sticky");
  }
};

const headerOberver = new IntersectionObserver(navbarViewer, {
  root: null,
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

headerOberver.observe(header);

//  -------------------------------- reveal on scroll -----------------

const sections = document.querySelectorAll(".section");

const sectionRevealer = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return;
  if (entry.isIntersecting) {
    entry.target.classList.remove("section--hidden");
    observer.unobserve(entry.target);
  }
};

const sectionObserver = new IntersectionObserver(sectionRevealer, {
  root: null,
  threshold: 0.1,
});

sections.forEach((section) => {
  section.classList.add("section--hidden");
  console.log(section);
  sectionObserver.observe(section);
});

//  -------------------------------- slider -----------------

const slides = document.querySelectorAll(".slide");

// const slider = document.querySelector(".slider");
let currentSlide = 0;

slides.forEach(function (s, i) {
  s.style.transform = `translateX(${i * 100}%)`;
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowRight") {
    if (currentSlide < slides.length - 1) {
      currentSlide++;
    } else {
      currentSlide = 0;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translateX(${(i - currentSlide) * 100}%)`;
    });
  }
});

document.addEventListener("keydown", function (e) {
  if (e.key === "ArrowLeft") {
    if (currentSlide > 0) {
      currentSlide--;
    } else {
      currentSlide = slides.length - 1;
    }
    slides.forEach((s, i) => {
      s.style.transform = `translate(${(i - currentSlide) * 100}%)`;
    });
  }
});

//  -------------------------------- couresol --------------------

function nextSlide() {
  if (currentSlide < slides.length - 1) {
    currentSlide++;
  } else {
    currentSlide = 0;
  }
  slides.forEach((s, i) => {
    s.style.transform = `translate(${(i - currentSlide) * 100}%)`;
  });
}

setInterval(nextSlide, 3000);
