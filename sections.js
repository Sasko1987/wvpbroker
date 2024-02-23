const revealSection = function (entries, observer) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.remove("section--hidden");
      observer.unobserve(entry.target);
    }
  });
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.1,
});

document.querySelectorAll("section").forEach((section) => {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
