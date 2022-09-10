const searchEl = document.querySelector(".search");
const searchInputEl = searchEl.querySelector("input");

searchEl.addEventListener('click', function(){
  searchInputEl.focus();  //focus강제적용
});

searchInputEl.addEventListener('focus', function(){
  searchEl.classList.add('focused');  //focused라는 클래스 추가
  searchInputEl.setAttribute('placeholder', '통합검색'); //html의 속성을 'Attribute'라고 부름
});

searchInputEl.addEventListener('blur', function(){    //input요소에 focus가 해제되면
  searchEl.classList.remove('focused');  //focused라는 클래스 제거
  searchInputEl.setAttribute('placeholder', ''); //html의 속성을 'Attribute'라고 부름
});