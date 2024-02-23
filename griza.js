const emojis = document.querySelectorAll(".emoji-img");
const emojisImgs = document.querySelector(".emojis");
const submitBtn = document.querySelector(".submit");
const zadovolstvoSection = document.querySelector(".zadovolstvo");
const responseSection = document.querySelector(".response");
// emojis.forEach((emoji) => {
//   emoji.addEventListener("click", (e) => {
//     emojis.forEach((img) => img.classList.add("hidden"));
//     const clicked = e.target;
//     console.log(clicked);
//     document
//       .querySelector(`.griza-klienti_form-${clicked.dataset.tab}`)
//       .classList.add("active");
//     clicked.classList.add(`griza-klienti_form-${clicked.dataset.tab}`);
//   });
// });

emojis.forEach((emoji) => {
  emoji.addEventListener("click", (e) => {
    emojisImgs.classList.add("hidden");
    const clicked = e.target;
    console.log(clicked);
    document
      .querySelector(`.griza-klienti_form-${clicked.dataset.tab}`)
      .classList.add("active");
    // clicked.classList.add(`griza-klienti_form-${clicked.dataset.tab}`);
  });
});

submitBtn.addEventListener("click", (e) => {
  e.preventDefault();
  zadovolstvoSection.classList.add("hidden");
  responseSection.classList.remove("hidden").add("active");
});
