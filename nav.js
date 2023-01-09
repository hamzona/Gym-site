let btn = document.querySelector(".btn");
let list = document.querySelector(".responsive-list");
let st = false;
const styleList = { display: st ? "none" : "block" };
btn.addEventListener("click", () => {
  console.log("radi");

  st = !st;

  list.style.display = st ? "flex" : "none";
});
