const images = document.querySelectorAll("img[data-source]");

console.log(images);

const imgCallback = function (entries, observer) {
  const [entry] = entries;
  if (!entry.isIntersecting) return; // Entry is not visible
  entry.target.src = entry.target.dataset.source;
  observer.unobserve(entry.target);
};

const imageObserver = new IntersectionObserver(imgCallback, {
  root: null,
  threshold: 0,
});

images.forEach(function (image) {
  imageObserver.observe(image);
});
