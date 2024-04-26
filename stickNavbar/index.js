const header = document.getElementById("header");

const nav = document.getElementById("navbar");
const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);

function observerFunc(entries) {
  const [entry] = entries;
  console.log(entry);
  //   entries.forEach((entry) => {
  if (!entry.isIntersecting) {
    nav.classList.add("sticky");
  } else {
    nav.classList.remove("sticky");
  }
  //   });
}

const navObserver = new IntersectionObserver(observerFunc, {
  root: null, // default is viewport
  threshold: 0,
  rootMargin: `-${navHeight}px`,
});

navObserver.observe(header);
