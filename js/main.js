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


const badgeEl = document.querySelector("header .badges");    //document는 html 자체

window.addEventListener('scroll', _.throttle(function(){   //window : 우리가 보고있는 화면 창 , lodash cdn 연결 통해 _.throttle 사용가능
  console.log(window.scrollY)
  if(window.scrollY > 500){
    badgeEl.style.display = 'none';   //배지 숨김
  } else {
    badgeEl.style.display = 'block';  //배지 보임
  }
}, 300));   //300ms = 0.3초   로 부하를 줘서 함수가 마구잡이로 실행되는 것 방지 (사이트를 가볍게 함)
// _.throttle(함수, 시간)