let buttonsRight = document.querySelector(".img-button.right");
let buttonLeft = document.querySelector(".img-button.left");
let slides = document.querySelectorAll(".imges");
let i = 0;
buttonsRight.addEventListener("click", () => {
  displayNone();
  i++;

  if (i > slides.length - 1) {
    i = 0;
  }
  slides[i].classList.add("show");
});

buttonLeft.addEventListener("click", () => {
  displayNone();
  i--;

  if (i < 0) {
    i = slides.length - 1;
  }
  slides[i].classList.add("show");
});

setInterval(() => {
  displayNone();
  i++;
  if (i > slides.length - 1) {
    i = 0;
  }
  slides[i].classList.add("show");
}, 3500);

function displayNone() {
  slides.forEach((slide) => {
    slide.classList.remove("show");
  });
}
/***************************** */
