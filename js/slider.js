"use strict";
const btnSliderBack = document.querySelector("#btnSliderBack");
const btnSliderNext = document.querySelector("#btnSliderNext");
const sliderImgs = document.querySelectorAll("#sliderimg");
const sliderPoints = document.querySelectorAll("#sliderPoint");
const sliderLinks = document.querySelectorAll(".completed-projects__img-block_link");

let currentSlideIndex = 0;
const totalSlides = sliderImgs.length; 

function toggleSlide(index, add = true) {
  sliderLinks[index].classList.toggle("completed-projects__img-block_link-active", add);
  sliderImgs[index].classList.toggle("hidden", !add);
  sliderPoints[index].classList.toggle("cp-body-info__slider_point-active", add);
}

function changeSlideNext() {
  toggleSlide(currentSlideIndex, false);

  currentSlideIndex = (currentSlideIndex + 1) % totalSlides;

  toggleSlide(currentSlideIndex, true);
}

function changeSlideBack() {
  toggleSlide(currentSlideIndex, false);

  currentSlideIndex = (currentSlideIndex - 1 + totalSlides) % totalSlides;

  toggleSlide(currentSlideIndex, true);
}

btnSliderNext.addEventListener("click", changeSlideNext);
btnSliderBack.addEventListener("click", changeSlideBack);

//CRRRRAZY SlIDER     . 
//                    .
//                    .
//                    .
//                    .
//              .           .     
//               .         . 
//                .       . 
//                 .     . 
//                  .   . 
//                   . . 
//                    .    

// function changeSlideNext() {
//   if (currentSlideIndex < 2) {
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     currentSlideIndex++;
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//   } else {
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     currentSlideIndex = 0;
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//   }
// }
// function changeSlideBack() {
//   if (currentSlideIndex == 0) {
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     currentSlideIndex = 2;
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//   } else {
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//     currentSlideIndex--;
//     sliderLinks[currentSlideIndex].classList.toggle(
//       "completed-projects__img-block_link-active"
//     );
//     sliderPoints[currentSlideIndex].classList.toggle(
//       "cp-body-info__slider_point-active"
//     );
//     sliderImgs[currentSlideIndex].classList.toggle("hidden");
//   }
// }

// btnSliderNext.addEventListener("click", () => changeSlideNext());
// btnSliderBack.addEventListener("click", () => changeSlideBack());
