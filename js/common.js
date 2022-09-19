//SEARCH
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




const thisYear = document.querySelector(".this-year");
thisYear.textContent = new Date().getFullYear(); /* new 키워드 통해 Date라는 JS 생성자함수 실행, getFullYear메소드 실행으로 현재 년도 정보 숫자 데이터로 반환 */