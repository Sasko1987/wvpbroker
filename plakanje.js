const buttons = document.querySelectorAll(".zivotno-items__button");
const uslugiTekst = document.querySelectorAll(".uslugi-tekst");

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
  });
});
