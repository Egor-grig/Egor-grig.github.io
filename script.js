// let slider = document.querySelector('.slider'),
//   slides = slider.querySelectorAll('.slide'),
//   posX1 = 0,
//   posX2 = 0,
//   slideIndex = 0,
//   slideWidth = slides[0].offsetWidth,
//   posTreshhold = slideWidth * .35,
//   trfRegExp = /([-0-9.]+(?=px))/,

//   slide = function() {    
//     slider.style.transition = 'transform .2s'
//     slider.style.transform = `translate3d(-${slideIndex * slideWidth}px, 0px, 0px)`;
//   }

//   sliderStart = function(event) {
//     posInit = posX1 = event.clientX
    
//     document.addEventListener('mousemove', sliderAction)
//     document.addEventListener('mouseup', sliderEnd)
//   },

//   sliderAction = function(event) {
    
//     let 
//       style = slider.style.transform,
//       transform = +style.match(trfRegExp)[0];

//     slider.style.transition = '';

//     posX2 = posX1 - event.clientX;
//     posX1 = event.clientX;

//     slider.style.transform = `translate3d(${transform - posX2}px, 0px, 0px)`
  
//   },

//   sliderEnd = function() {
//     posFinal = posInit - posX1;

//     document.removeEventListener('mousemove', sliderAction)
//     document.addEventListener('mouseup', sliderEnd)

//     if(Math.abs(posFinal) > posTreshhold) {
//       if(posInit < posX1){
//         slideIndex--;
//       } else if (posInit > posX1){
//         slideIndex++;
//       }
//     }

//     if (posInit !== posX1){
//       slide();
//     }
//   }

// slider.style.transform = 
// slider.style.transform = 'translate3d(0px, 0px, 0px)';

// slider.addEventListener('mousedown', sliderStart)

var swiper = new Swiper(".swiper", {
  initialSlide: 3,
  centeredSlides: true,
  spaceBetween: 10,
  loop: true,
  speed: 900,
  grabCursor: true,
  allowTouchMove: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: -10,
    stretch: -45,
    depth: 90,
    modifier: 1,
    slideShadows: false,
  },
  mousewheel: {
    thresholdDelta: 50,
    sensitivity: 1,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true
  },
  breakpoints: {
    0: {
      slidesPerView:1,
      spaceBetween: 20,
    },
    600: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 5,
    },
  }
});