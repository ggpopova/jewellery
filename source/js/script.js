// "use strict";

//   (function () {

//     var sliderTrainersBlock = document.querySelector('.trainers__slider');

//     if (sliderTrainersBlock) {
//       sliderTrainersBlock = new window.Swiper('.trainers__slider-wrapper', {
//         loop: true,
//         slidesPerView: 4,
//         slidesPerGroup: 4,
//         spaceBetween: 40,
//         navigation: {
//           nextEl: '.trainers__btn--next',
//           prevEl: '.trainers__btn--prev',
//         },
//         breakpoints: {
//           320: {
//             slidesPerView: 1,
//             slidesPerGroup: 1,
//             spaceBetween: 0
//           },
//           768: {
//             slidesPerView: 2,
//             slidesPerGroup: 2,
//             spaceBetween: 30
//           },
//           1180: {
//             slidesPerView: 4,
//             slidesPerGroup: 4,
//             spaceBetween: 40
//           }
//         }
//       });
//     }
//   })();

//   var slideIndex = 1;
// showSlides(slideIndex);

// function plusSlides(n) {
//   showSlides(slideIndex += n);
// };

// function currentSlide(n) {
//   showSlides(slideIndex = n);
// };

// function showSlides(n) {
//   var i;
//   var slides = document.getElementsByClassName("trainers__slider");
//   var dots = document.getElementsByClassName("trainers__slider-wrapper");

//   if (n > slides.length) {
//     slideIndex = 1;
//   }

//   if (n < 1) {
//     slideIndex = slides.length;
//   }

//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }

//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace("active", "");
//   }

//   slides[slideIndex -1].style.display = "block";
//   dots[slideIndex -1].className += "active";
// }

// //   document.addEventListener('DOMContentLoaded', function () {
// //     var button = document.querySelector('.trainers__slider');
// //     button.onclick = function () {
// //         document.document.querySelector('.trainers__slider-wrapper').scrollLeft += 200;
// //     };
// // }, false);

//   // (function () {

// //   var sliderTrainersBlock = document.querySelector('.trainers__slider');

// //   if (sliderTrainersBlock) {
// //     sliderTrainersBlock = new window.Swiper('.trainers__slider-wrapper', {
// //       loop: true,
// //       slidesPerView: 4,
// //       slidesPerGroup: 4,
// //       spaceBetween: 40,
// //       navigation: {
// //         nextEl: '.trainers__btn--next',
// //         prevEl: '.trainers__btn--prev',
// //       },
// //       breakpoints: {
// //         320: {
// //           slidesPerView: 1,
// //           slidesPerGroup: 1,
// //           spaceBetween: 0
// //         },
// //         768: {
// //           slidesPerView: 2,
// //           slidesPerGroup: 2,
// //           spaceBetween: 30
// //         },
// //         1160: {
// //           slidesPerView: 4,
// //           slidesPerGroup: 4,
// //           spaceBetween: 40
// //         }
// //       }
// //     });
// //   }
// // })();



// // (function () {

// //   var sliderReviewsBlock = document.querySelector('.reviews__block');

// //   if (sliderReviewsBlock) {
// //     sliderReviewsBlock = new window.Swiper('.reviews__wrapper', {
// //       loop: true,
// //       slidesPerView: 1,
// //       slidesPerGroup: 1,
// //       spaceBetween: 0,
// //       navigation: {
// //         nextEl: '.reviews__btn--next',
// //         prevEl: '.reviews__btn--prev',
// //       },
// //     });
// //   }
// // })();

// // $(document).ready(function() {
// //   const position = 0;
// //   const slidesToShow = 3;
// //   const slidesToScoll = 2;

// //   const container = $(".slider-container");
// //   const track = $(".slider-track");
// //   const item = $(".slider-item");
// //   const itemCount = item.length;
// //   const btnPrev = $(".btn-prev");
// //   const btnNext = $(".btn-next");

// //   const itemWidth = container.width() / slidesToShow;

// //   const movePosition = slidesToScoll * itemWidth;

// //     item.each(function(index, item) {
// //       $(item).css ({
// //         minWidth: itemWidth
// //       });

// //     });

// //     btnPrev.click(function() {
// //       const itemsLeft = Math.abs(position) / itemWidth;
// //       position -= itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

// //       setPosition();
// //     })

// //     btnNext.click(function() {
// //       const itemsLeft = itemCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
// //       position -= itemsLeft >= slidesToShow ? movePosition : itemsLeft * itemWidth;

// //       setPosition();
// //     });

// //     const setPosition = () => {
// //       track.css ({
// //         transform: `translateX(${position}px)`
// //       });

// //       checkBtns();
// //     };

// //     const checkBtns = () => {
// //       btnNext.prop('disabled', position === 0);
// //       btnPrev.prop(
// //         'disabled',
// //         position >= (itemCount - slidesToShow) * itemWidth
// //         );
// //     };

// //     checkBtns();
// // });

// // const container = document.querySelector('.trainers__slider-wrapper');
// // const track = document.querySelector('.trainers__wrapper');
// // // const item = document.querySelector(".slider-item");
// // const btnPrev = document.querySelector('.trainers__btn--prev');
// // const btnNext = document.querySelector('.trainers__btn--next');

//   // let position = 0;
//   // const slidesToShow = 4;
//   // const slidesToScoll = 1;

//   // const container = document.querySelector('.swiper-container');
//   // const track = document.querySelector('.swiper-wrapper');
//   // // const item = document.querySelector(".slider-item");
//   // const btnPrev = document.querySelector('.trainers__btn--prev');
//   // const btnNext = document.querySelector('.trainers__btn--next');

//   // const items = document.querySelectorAll('.slider-item');
//   // const itemsCount = items.length;
//   // const itemWidth = container.clientWidth / slidesToShow;
//   // const movePosition = slidesToScoll * itemWidth;

//   // items.forEach((item) => {
//   //   item.style.minWidth = `${itemWidth}px`;
//   // });

//   // btnNext.addEventListener('click', () => {
//   //   const itemsLeft = itemsCount - (Math.abs(position) + slidesToShow * itemWidth) / itemWidth;
//   //   position -= itemsLeft >= slidesToScoll ? movePosition : itemsLeft * itemWidth;

//   //   setPosition();
//   //   checkBtns();
//   // });

//   // btnPrev.addEventListener('click', () =>  {
//   //   const itemsLeft = Math.abs(position) / itemWidth;
//   //   position += itemsLeft >= slidesToScoll ? movePosition : itemsLeft * itemWidth;

//   //   setPosition();
//   //   checkBtns();
//   // });

//   // const setPosition = () => {
//   //   track.style.transform = `translateX(${position}px)`;
//   // };

//   // const checkBtns = () => {
//   //   btnPrev.disabled = position === 0;
//   //   btnNext.disabled = position <= -(itemsCount - slidesToShow) * itemWidth;

//   // };

//   // checkBtns();
