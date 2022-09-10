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
    // badgeEl.style.display = 'none';   //배지 숨김
    // gsap.to(동작시킬요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {  //개체데이터는 {}로
      opacity: 0,    //시각적으로만 사라짐. 요소는 그대로 있어서 혼란
      display: 'none' //css값을 js에서 사용할 땐 ''써서 문자데이터로 사용(숫자는 ㄱㅊ)
    });
  } else {
    // badgeEl.style.display = 'block';  //배지 보임
    gsap.to(badgeEl, .6, {  //개체데이터는 {}로
      opacity: 1,
      display: 'block'
    });
  }
}, 300));   //300ms = 0.3초   로 부하를 줘서 함수가 마구잡이로 실행되는 것 방지 (사이트를 가볍게 함)
// _.throttle(함수, 시간)
