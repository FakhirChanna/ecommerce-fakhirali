"use strict";
const slides = document.querySelectorAll(".slide");
slides.forEach((e, l) => {
  e.style.transform = `translateX(${100 * l}%)`;
});
const nextSlide = document.querySelector(".btn-next");
let curSlide = 0,
  maxSlide = slides.length - 1;
nextSlide.addEventListener("click", function () {
  curSlide === maxSlide ? (curSlide = 0) : curSlide++,
    slides.forEach((e, l) => {
      e.style.transform = `translateX(${100 * (l - curSlide)}%)`;
    });
});
const prevSlide = document.querySelector(".btn-prev");
prevSlide.addEventListener("click", function () {
  0 === curSlide ? (curSlide = maxSlide) : curSlide--,
    slides.forEach((e, l) => {
      e.style.transform = `translateX(${100 * (l - curSlide)}%)`;
    });
});
