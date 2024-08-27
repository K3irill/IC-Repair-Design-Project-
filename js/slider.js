"use strict";
const btnSliderBack = document.querySelector("#btnSliderBack");
const btnSliderNext = document.querySelector("#btnSliderNext");
const sliderImgs = document.querySelectorAll("#sliderimg");
const sliderPoints = document.querySelectorAll("#sliderPoint");
const sliderPointActive = document.querySelector(
  ".cp-body-info__slider_point-active"
);
const sliderLinks = document.querySelectorAll(
  ".completed-projects__img-block_link"
);
const sliderLinksActive = document.querySelector(
  ".completed-projects__img-block_link-active"
);
// console.log(sliderImgs[0]);
let currentSlideIndex = 0;

function changeSlideNext() {
  if (currentSlideIndex < 2) {
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    currentSlideIndex++;
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
  } else {
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    currentSlideIndex = 0;
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
  }
}
function changeSlideBack() {
  if (currentSlideIndex == 0) {
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    currentSlideIndex = 2;
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
  } else {
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
    currentSlideIndex--;
    sliderLinks[currentSlideIndex].classList.toggle(
      "completed-projects__img-block_link-active"
    );
    sliderPoints[currentSlideIndex].classList.toggle(
      "cp-body-info__slider_point-active"
    );
    sliderImgs[currentSlideIndex].classList.toggle("hidden");
  }
}

btnSliderNext.addEventListener("click", () => changeSlideNext());
btnSliderBack.addEventListener("click", () => changeSlideBack());
