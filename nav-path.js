const path = window.location.pathname;

const links = document.querySelectorAll("#meni-list a");

links.forEach(function (link) {
  // Get the href attribute of the link
  let href = link.getAttribute("href");

  if (path.indexOf(href) !== -1) {
    link.classList.add("active");
  }
});

//revail sections

const allSections = document.querySelectorAll("section");

const revealSection = function (entries, observer) {
  const [entry] = entries;

  if (!entry.isIntersecting) return;

  entry.target.classList.remove("section--hidden");
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
});

allSections.forEach(function (section) {
  sectionObserver.observe(section);
  section.classList.add("section--hidden");
});
