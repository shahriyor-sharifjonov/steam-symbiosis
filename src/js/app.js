import * as functions from "./modules/functions.js";

functions.isWebp();

import Swiper, { Navigation, Pagination, Thumbs } from 'swiper';

const swiper = new Swiper();

var swiper1 = new Swiper(".swiper__content", {
  spaceBetween: 10,
  slidesPerView: 2,
  freeMode: true,
  watchSlidesProgress: true,
  breakpoints: {
    768: {
      slidesPerView: 4,
    },
  },
});
new Swiper(".swiper__thumb", {
  modules: [Thumbs, Navigation],
  spaceBetween: 10,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  thumbs: {
    swiper: swiper1,
  },
  on: {
    slideChange: slideChanged
  }
});

[].map.call(document.querySelectorAll('[anim="ripple"]'), (el) => {
  el.addEventListener("click", (e) => {
    e = e.touches ? e.touches[0] : e;
    const r = el.getBoundingClientRect(),
      d = Math.sqrt(Math.pow(r.width, 2) + Math.pow(r.height, 2)) * 2;
    el.style.cssText = `--s: 0; --o: 1;`;
    el.offsetTop;
    el.style.cssText = `--t: 1; --o: 0; --d: ${d}; --x:${
      e.clientX - r.left
    }; --y:${e.clientY - r.top};`;
  });
});

const slides = document.querySelectorAll('.about__slide');
slides.forEach(slide => {
  slide.addEventListener('click', () => {
    document.querySelectorAll('video').forEach(el => {
      el.pause();
    })
  })
})

function slideChanged() {
  console.log('afsafs');
  document.querySelectorAll('video').forEach(el => {
    el.pause();
  })
}