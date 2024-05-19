const slider = tns({
  "container": "#animation1",
  "mode": "gallery",
  "items": 1,
  // "animateIn": "jello",
  // "animateOut": "rollOut",
  "mouseDrag": true,
  "loop": true,
  "speed": 3000,
  "swipeAngle": false,
  "controlsContainer": ".header__controls",
  "nav": false,
});

const sliderDrag = tns({
  "container": "#mouse-drag",
  "items": 4,
  "mouseDrag": true,
  "slideBy": "page",
  "swipeAngle": false,
  "speed": 400,
  "controls": false,
  "nav": false,
  responsive: {
    320: {
      edgePadding: 15,
      gutter: 10,
      items: 1
    },
    576: {
      edgePadding: 0,
      gutter: 10,
      items: 2
    },
    992: {
      edgePadding: 0,
      gutter: 15,
      items: 3
    },
    1024: {
      edgePadding: 0,
      gutter: 0,
      items: 4
    },
    1439: {
      items: 4
    }
  }
});


Fancybox.bind("[data-fancybox]", {
  groupAttr: false,
});


const hamburger = document.querySelector('.mobile-open'),
  menu = document.querySelector('.mobile-menu'),
  closeElem = document.querySelector('.mobile-menu__close');

hamburger.addEventListener('click', () => {
  menu.classList.add('active');
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});