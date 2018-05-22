import './modules'
import AOS from 'aos'
import Swiper from 'swiper/dist/js/swiper.js';

console.log(`app.js has loaded!`)

AOS.init();

// console.log(AOS);
// console.log(Swiper);

  // AOS.init({
  //     offset: 200,
  //     duration: 600,
  //     easing: 'ease-in-sine',
  //     delay: 100,
  //   });

  var mySwiper = new Swiper ('.swiper--header', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    
    // If we need pagination
    pagination: {
    	el: '.swiper-pagination',
      type: 'bullets',
      renderBullet: function(index, className) {
        return '<div class="' + className + '">' + '0' +(index + 1) + '</div>';
      },
      clickable: true,
    },
    // effect: 'fade',

    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
    
    // And if we need scrollbar
    // scrollbar: '.swiper-scrollbar',
  })  
  var mySwiper2 = new Swiper ('.swiper--projects', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // Navigation arrows
    navigation: {
      nextEl: '.swiper--projects-button-next',
      prevEl: '.swiper--projects-button-prev',
    },
    effect: "flip",
    flipEffect: {
      rotate: 130,
      slideShadows: true,
    },
    
  })        


  var hamburgerBtn = document.getElementById('hamburgerBtn');
  var closeBtn = document.getElementById('closeBtn');

  function openMenu(){
    var navigationOverlay = document.getElementById('nav__overlay');
    navigationOverlay.style.display = "flex";
  }

  function closeMenu(){
    var navigationOverlay = document.getElementById('nav__overlay');
    navigationOverlay.style.display = "none";
  }

  hamburgerBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);


  mySwiper.on('slideChange', function () {
    console.log('slide changed');
    console.log(mySwiper.realIndex);
    if(mySwiper.realIndex == 1){
      document.getElementById('word1').innerText = 'creativity';
    }if(mySwiper.realIndex == 2){
      document.getElementById('word1').innerText = 'inspiration';
    }
    if(mySwiper.realIndex == 3){
      document.getElementById('word1').innerText = 'development';
    }
    if(mySwiper.realIndex == 0){
      document.getElementById('word1').innerText = 'eternity';
    }
  });