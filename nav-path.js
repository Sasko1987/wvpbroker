const path = window.location.pathname;

const links = document.querySelectorAll("#meni-list a");

links.forEach(function (link) {
  // Get the href attribute of the link
  let href = link.getAttribute("href");

  if (path.indexOf(href) !== -1) {
    link.classList.add("active");
  }
});
