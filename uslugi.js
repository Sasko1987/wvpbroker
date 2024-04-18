const buttons = document.querySelectorAll(".zivotno-items__button");
const uslugiTekst = document.querySelectorAll(".uslugi-tekst");
const nezivotnoButtons = document.querySelectorAll(".nezivotno-items__button");
const nezivotnoTekst = document.querySelectorAll(".nezivotno-tekst");

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    buttons.forEach((button) => button.classList.remove("uslugi-tab__aktive"));
    const clicked = e.target.closest(".zivotno-items__button");
    console.log(clicked);
    clicked.classList.add("uslugi-tab__aktive");
    uslugiTekst.forEach((us) => {
      us.classList.remove("uslugi-tekst__activ");
    });
    document
      .querySelector(`.uslugi-tekst-${clicked.dataset.tab}`)
      .classList.add("uslugi-tekst__activ");
  });
});

nezivotnoButtons.forEach((btn) => {
  btn.addEventListener("click", (e) => {
    nezivotnoButtons.forEach((button) =>
      button.classList.remove("nezivotno-tab__active")
    );
    const clicked = e.target.closest(".nezivotno-items__button");
    clicked.classList.add("nezivotno-tab__active");
    nezivotnoTekst.forEach((us) => {
      us.classList.remove("nezivotno-tekst__activ");
    });
    document
      .querySelector(`.nezivotno-tekst-${clicked.dataset.tab}`)
      .classList.add("nezivotno-tekst__activ");
  });
});
