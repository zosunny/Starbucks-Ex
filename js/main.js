
//BADGES
const badgeEl = document.querySelector("header .badges");    //document는 html 자체
const toTopEl = document.querySelector("#to-top");           //직접 gsap.to("#to-top") 쓰는 것도 가능하나 동작을 가볍게(찾는 시간줄이기위해) 변수를 쓰자

window.addEventListener('scroll', _.throttle(function(){   //window : 우리가 보고있는 화면 창 , lodash cdn 연결 통해 _.throttle 사용가능
  console.log(window.scrollY)
  if(window.scrollY > 500){
    //배지 숨김
    // badgeEl.style.display = 'none';
    // gsap.to(동작시킬요소, 지속시간, 옵션);
    gsap.to(badgeEl, .6, {  //option은 기본적으로 객체데이터: {}로
      opacity: 0,     //시각적으로만 사라짐. 요소는 그대로 있어서 혼란
      display: 'none' //css값을 js에서 사용할 땐 ''써서 문자데이터로 사용(숫자는 ㄱㅊ)
    });
    //버튼 보이기!
    gsap.to(toTopEl, .2, {
      x: 0    //요소가 보일땐 원위치
    });
  } else {
    //배지 보임
    // badgeEl.style.display = 'block';
    gsap.to(badgeEl, .6, {  //option은 기본적으로 객체데이터: {}로
      opacity: 1,
      display: 'block'
    });
    //버튼 숨기기!
    gsap.to("#to-top", .2, {
      x: 100  //요소를 숨길땐 100px x축으로 이동
    });
  }
}, 300));   //300ms = 0.3초   로 부하를 줘서 함수가 마구잡이로 실행되는 것 방지 (사이트를 가볍게 함)
// _.throttle(함수, 시간)


// const toTopEl = document.querySelector("#to-top");
toTopEl.addEventListener('click', function(){
  gsap.to(window, .7, {     //gsap이라는 애니메이션을 처리하는 JS라이브러리가 window객체 통해 화면 전체 애니메이션 처리
    scrollTo: 0 //Scroll의 위치를 0px지점으로 옮겨주겠다.(0.7초간!)   //추가 cdn 플러그인 가져와 연결했었음 html에
  });
});



const fadeEls = document.querySelectorAll(".visual .fade-in");
fadeEls.forEach(function(fadeEl, index){     //forEach를 사용해 여러개의 fadeEls를 각각의 fadeEl index 번호로 구분되는 단수형태로 사용가능
  // gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * .7,  //0.7초 뒤에 opacity가 1이 되게 (근데 4개의 이미지가 순차적으로)
    opacity: 1
  });
});



//SWIPER
//new Swiper(선택자, 옵션)
new Swiper(".notice-line .swiper-container", {   //생성자(js의 클래스)-js문법으로 swiper라는 함수를 실행
  direction: 'vertical',
  autoplay: true,   //자동재생
  loop: true        //반복재생
});
new Swiper(".promotion .swiper-container", {
  //direction: 'horizontal', //default값
  slidesPerView: 3,        //한번에 보여줄 슬라이드 개수 (default는 1개)
  spaceBetween:10,         //슬라이드 사이 여백
  centeredSlides: true,    //왼쪽말고 가운데서 보이기
  loop: true,
  autoplay: {
    delay: 5000
  },
  pagination: {
    el: '.promotion .swiper-pagination',  //페이지 번호 요소 선택자(입력된 선택자에 맞는 요소 찾아 페이지번호 사용할 수 있도록 동작)
    clickable: true   //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev',      //이전버튼 제어
    nextEl: '.promotion .swiper-next'       //이후버튼 제어
  }
});

new Swiper(".awards .swiper-container", {
  autoplay: true,
  loop: true,
  spaceBetween: 30,   //사이여백
  slidesPerView: 5,    //한 화면에 몇개 슬라이드 보일 것?
  navigation: {
    prevEl: '.awards .swiper-prev',
    nextEl: '.awards .swiper-next'
  }
});



const promotionEl = document.querySelector(".promotion");
const promotionToggleBtn = document.querySelector(".toggle-promotion");
let isHidePromotion = false   //프로모션 영역이 숨겨져 있니?

promotionToggleBtn.addEventListener('click', function(){
  isHidePromotion = !isHidePromotion  /* false였음 클릭시 ture가 되어야 함 */
  if (isHidePromotion){
    //숨김처리
    promotionEl.classList.add('hide');
  }else{
    //보임처리
    promotionEl.classList.remove('hide');
  }
});




function random(min, max){
  return parseFloat((Math.random() * (max-min) + min).toFixed(2))   //min~max범위의 반환된 2자리 문자데이터를 숫자 데이터로 변환
}

function floatingObject(selector, delay, size){
  //gsap.to(요소, 시간, 옵션);
  gsap.to(selector, random(1.5, 2.5), {
    y: size,
    repeat: -1,               //-1: 무한반복
    yoyo: true,               //역재생
    ease: Power1.easeInOut,   //greenSock에서 easing함수를 이용해 동작 제어 가능
    delay: random(0, delay)   //지연시간
  });
};
floatingObject('.floating1', 1, 15)
floatingObject('.floating2', .5, 15)
floatingObject('.floating3', 1.5, 15)




const spyEls = document.querySelectorAll("section.scroll-spy");
spyEls.forEach(function(spyEl){
  new ScrollMagic
    .Scene({                //Scene: 요소를 감시. 감시 옵션 추가가능한 메소드
      triggerElement: spyEl,      //보여짐 여부를 감시할 요소를 지정
      triggerHook: .8,            //0.8지점에서 trigger. setClassToggle함수실행 (뷰포트시작지점:0 뷰포트끝지점:1)
    })
    .setClassToggle(spyEl, 'show')          //setClassToggle(요소, 토글할(넣었다뺐다할) class이름 지정)
    .addTo(new ScrollMagic.Controller());   // addTo: ScrollMagic JS라이브러리가 필요한 Controller 내용 추가위한 메소드

})