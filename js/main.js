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
