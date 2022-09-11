// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
function onYouTubeIframeAPIReady() {  // 절대 바꾸면 안됨
  new YT.Player('player', {   // <div id="player"></div>의 player 찾음
  videoId: 'An6LvWQuj_8',     // 각각의 유튜브 비디오가 가지는 id
  playerVars: {     // Vars(Variables): 영상 재생위한 여러 변수들
    autoplay: true,
    loop: true,             // loop 사용하려면
    playlist: 'An6LvWQuj_8' // 반복 재생할 유튜브 영상 id 목록 제시
  },
  events: {
    onReady: function(e){    // 객체데이터 내부에 익명의 함수 할당되면 => 메소드
      e.target.mute()   // 음소거
    }
  }
  });
}