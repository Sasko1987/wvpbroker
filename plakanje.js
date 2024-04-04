const buttons = document.querySelectorAll(".zivotno-items__button");
const uslugiTekst = document.querySelectorAll(".uslugi-tekst");

const nezivotnoBtns = document.querySelectorAll(".nezivotno-items__button");
const nezivotnoText = document.querySelectorAll(".nezivotno-tekst");

const nezivotnoSecondBtns = document.querySelectorAll(".nezivotno-second-btn");
const nezivotnoSecondTekst = document.querySelectorAll(
  ".nezivotno-second-tekst"
);

const nezivotnoThirdBtns = document.querySelectorAll(".nezivotno-third-btn");
const nezivotnoThirdTekst = document.querySelectorAll(".nezivotno-third-tekst");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("uslugi-tab__aktive"));
    const clicked = e.target.closest(".zivotno-items__button");
    console.log(clicked);
    clicked.classList.add("uslugi-tab__aktive");
    uslugiTekst.forEach((us) => {
      us.classList.remove("plakanje-opcii_active");
    });
    document
      .querySelector(`.uslugi-tekst-${clicked.dataset.tab}`)
      .classList.add("plakanje-opcii_active");
    if (clicked) {
      document
        .querySelector(".plakanje-nezivotno-container")
        .classList.add("gray-background");
    }
  });
});

nezivotnoBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    nezivotnoBtns.forEach((button) =>
      button.classList.remove("uslugi-tab__aktive")
    );
    const clicked = e.target.closest(".nezivotno-items__button");
    console.log(clicked);
    clicked.classList.add("uslugi-tab__aktive");
    nezivotnoText.forEach((us) => {
      us.classList.remove("plakanje-opcii_active");
    });
    document
      .querySelector(`.nezivotno-tekst-${clicked.dataset.tab}`)
      .classList.add("plakanje-opcii_active");
    if (clicked) {
      document
        .querySelector(".nezivotno-first")
        .classList.add("gray-background");
    }
  });
});

nezivotnoSecondBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    nezivotnoSecondBtns.forEach((button) =>
      button.classList.remove("uslugi-tab__aktive")
    );
    const clicked = e.target.closest(".nezivotno-second-btn");
    console.log(clicked);
    clicked.classList.add("uslugi-tab__aktive");
    nezivotnoSecondTekst.forEach((us) => {
      us.classList.remove("plakanje-opcii_active");
    });
    document
      .querySelector(`.nezivotno-second-tekst-${clicked.dataset.tab}`)
      .classList.add("plakanje-opcii_active");
    if (clicked) {
      document.querySelector(".nezivotno-bg").classList.add("gray-background");
    }
  });
});

nezivotnoThirdBtns.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    nezivotnoThirdBtns.forEach((button) =>
      button.classList.remove("uslugi-tab__aktive")
    );
    const clicked = e.target.closest(".nezivotno-third-btn");
    console.log(clicked);
    clicked.classList.add("uslugi-tab__aktive");
    nezivotnoThirdTekst.forEach((us) => {
      us.classList.remove("plakanje-opcii_active");
    });
    document
      .querySelector(`.nezivotno-third-tekst-${clicked.dataset.tab}`)
      .classList.add("plakanje-opcii_active");
    if (clicked) {
      document
        .querySelector(".nezivotno-third-bg")
        .classList.add("gray-background");
    }
  });
});
