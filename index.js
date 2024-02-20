//------------ buttons za naslovna
const dpzoBtn = document.getElementById("btn-dpzo");
const zivotnoBtn = document.getElementById("btn-zivotno");
const nezivotnoBtn = document.getElementById("btn-nezivotno");

dpzoBtn.addEventListener("click", () => {
  window.location.href = "uslugi.html#dobrovolno-zdravstveno-osiguruvanje";
});

zivotnoBtn.addEventListener("click", () => {
  window.location.href = "uslugi.html#main-uslugi";
});

nezivotnoBtn.addEventListener("click", () => {
  window.location.href = "uslugi.html#nezivotno-osiguruvanje";
});

//hamburger menu

const mainMenu = document.querySelector("#meni-list");
const closeMenu = document.querySelector(".closeMenu");
const openMenu = document.querySelector(".openMenu");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
  mainMenu.style.display = "flex";
  mainMenu.style.top = "0";
}

function close() {
  mainMenu.style.top = "-150%";
}

// COUNTER ZA NASLOVNA

const countDogovori = document.querySelector(".count-dogovori");
const countPremija = document.querySelector(".count-premija");

function startCounter(klasa, ostatok, brojac, maksimum) {
  let count = 1;
  const interval = setInterval(() => {
    klasa.textContent = formatNumberWithDot(count + ostatok);
    count += brojac; // 27240 % 1450 i na count se dodava 1139
    if (count > maksimum) {
      clearInterval(interval);
    }
  }, 90);
}

function formatNumberWithDot(number) {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");
}

// Startuvanje na counter koa ke se pojavi sekcijata
const counterSection = document.getElementById("naslovna-counter");

const options = {
  root: null,
  rootMargin: "0px",
  threshold: 0.5,
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      startCounter(countDogovori, 1139, 1450, 27240);
      startCounter(countPremija, 30802, 81256, 924681);
    }
  });
}, options);

observer.observe(counterSection);
