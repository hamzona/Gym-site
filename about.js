let imgs = [
  "/img-about/5dbb01fc045a3106cb2daf78.webp",
  "/img-about/bodybuilder-posing-fitness-muscled-man-dark-scene_136403-4206.webp",
];
console.log("novi");
let imgs_cont = document.querySelector(".imgs-satisfied-costumers");
console.log(imgs_cont);

imgs.forEach((img) => {
  let div_img = document.createElement("div");
  div_img.classList.add("img");
  div_img.style.background = img;

  imgs_cont.appendChild(div_img);
});
