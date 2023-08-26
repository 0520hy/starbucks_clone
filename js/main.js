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
const toTopEl = document.querySelector('#to-top');
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
     });
     // 위로 올라가는 버튼 보이게
     gsap.to(toTopEl, .2, {
      x: 0
    })
   }else{
    gsap.to(badgeEl , 0.6, {
      opacity : 1,
      display : 'block'
    })
    // 위로 올라가는 버튼 숨기기
    gsap.to(toTopEl, .2, {
      x: 100
    })
   }
},300));


toTopEl.addEventListener('click',function(){
 gsap.to(window, .7, {
  scrollTo:0
 });
});

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

new Swiper('.awards .swiper-container', {
  // direction: 'horizontal', // 수평 슬라이드
  autoplay: true, // 자동 재생 여부
  loop: true, // 반복 재생 여부
  spaceBetween: 30, // 슬라이드 사이 여백
  slidesPerView: 5, // 한 번에 보여줄 슬라이드 개수
  // slidesPerGroup: 5, // 한 번에 슬라이드 할 개수(전체 개수로 나뉘어야 함)
  navigation: { // 슬라이드 이전/다음 버튼 사용 여부
    prevEl: '.awards .swiper-prev', // 이전 버튼 선택자
    nextEl: '.awards .swiper-next' // 다음 버튼 선택자
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
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 '문자 데이터'를,
  // `parseFloat()`을 통해 소수점을 가지는 '숫자 데이터'로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}
// 부유하는(떠 다니는) 요소를 만드는 함수
function floatingObject(selector, delay, size) {
  gsap.to(
    selector, // 선택자
    random(1.5, 2.5), // 애니메이션 동작 시간
    {
      delay: random(0, delay), // 얼마나 늦게 애니메이션을 시작할 것인지 지연 시간을 설정.
      y: size, // `transform: translateY(수치);`와 같음. 수직으로 얼마나 움직일지 설정.
      repeat: -1, // 몇 번 반복하는지를 설정, `-1`은 무한 반복.
      yoyo: true, // 한번 재생된 애니메이션을 다시 뒤로 재생.
      ease: Power1.easeInOut // Easing 함수 적용.
    }
  )
}
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 20)

const spyEls = document.querySelectorAll('section.scroll-spy')

spyEls.forEach(function (spyEl) {
  new ScrollMagic
    .Scene({ // 감시할 장면(Scene)을 추가
      triggerElement: spyEl, // 보여짐 여부를 감시할 요소를 지정
      triggerHook: .8 // 화면의 80% 지점에서 보여짐 여부 감시
    })
    .setClassToggle(spyEl, 'show') // 요소가 화면에 보이면 show 클래스 추가
    .addTo(new ScrollMagic.Controller()) // 컨트롤러에 장면을 할당(필수!)
})
/*현재연도 계산*/ 
const thisYear = document.querySelector('.this-year')
thisYear.textContent = new Date().getFullYear()

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