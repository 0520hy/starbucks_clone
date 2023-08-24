const searchEl = document.querySelector('.search');
const searchInputEl = document.querySelector('input');

searchEl.addEventListener('click', function(){
  // div 요소 아무곳이나 눌러도 focus 
  searchInputEl.focus();
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused'); 
  searchInputEl.setAttribute('placeholder','통합검색');
  //setAttribute html 속성지정
});
searchInputEl.addEventListener('blur', function(){
  searchEl.classList.remove('focused');
  searchInputEl.setAttribute('placeholder','');
});

const badgeEl = document.querySelector('header .badges');
//_.throttle(함수, 시간)
//실행되는 함수에 제한(스크롤할 때 많이 사용)
window.addEventListener('scroll' , _.throttle(function(){
 console.log(window.scrollY);
  //화면 위치 파악
   if(window.scrollY > 500){
    //배지 숨김
    //gsap.to(요소, 지속시간, 옵션)
     gsap.to(badgeEl , 0.6, {
       opacity : 0,
       display : 'none'
     })
   }else{
    gsap.to(badgeEl , 0.6, {
      opacity : 1,
      display : 'block'
    })
   }
},300));

const fadeEl =document.querySelectorAll('.visual .fade-in');
fadeEl.forEach(function(fadeEl, index){
  gsap.to(fadeEl, 1, {
    delay: (index+1) * .2,
   opacity: 1
  })

})


//new Swiper(선택자, 옵션)
new Swiper('.notice-line .swiper-container',{
  direction: 'vertical',
  autoplay: true,
  loop: true
});

new Swiper('.promotion .swiper-container',{
  //direction: 수평 기본 옵션
  slidesPerView: 3, // 한번에 보여줄 슽라이드 개수
  spaceBetween: 10, // 슬라이드 사이 간격
  centeredSlides: true, //1번 슬라이드가 중앙에 보이게
  loop: true,
  autoplay:{
    delay : 3000
  },
  pagination:{
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable : true, //사용자의 페이지 번호 요소 제어
  },
  navigation:{/*요소 선택할 수 있게 정보 입력*/ 
    prevEl: '.promotion .swiper-prev',
    nextEl: '.promotion .swiper-next'
  }
})
 

const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn =document.querySelector('.toggle-promotion');
let isHidePromotion = false;
promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion
   if(isHidePromotion){ //숨김
    promotionEl.classList.add('hide');
   }else{ //보임
    promotionEl.classList.remove('hide');
   }
})