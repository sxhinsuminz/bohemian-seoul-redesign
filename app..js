const swiper = new Swiper('.swiper', {
  // 옵션 설정
  direction: 'vertical', // 이 부분을 지우면 슬라이드가 가로로 나옵니다.
  loop: true, // 루프 설정 1 - 2 - 3 - 1 반복
  slidesPerView: 1, // 한 화면에 보일 슬라이드 개수, effect 설정 시 적용 안 됨
  spaceBetween: 0, // 슬라이드 간의 간격 설정
  // effect: 'fade', // 지울 시 일반 슬라이드, `fade`, `flip`, `coverflow`, `cube`, `cards` 등
  
  
  // 자동 재생 원할 경우 설정, 지우면 멈춰 있음
  // autoplay: {
  //   delay: 5000, // 5초마다 슬라이드 넘김
  //   disableOnInteraction : false, // 자동 재생 중 건드려도 비활성화되지 않음
  // },

  // 페이지 사용할 경우 설정
  pagination: {
    el: '.swiper-pagination',
  //  type: 'progressbar', // 지우면 `bullet` 기본값, 'fraction', 'progressbar' 선택 가능
  },

  // 화살표
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // 스크롤바 사용할 경우 설정
  scrollbar: {
    el: '.swiper-scrollbar',
    draggable: true, // 지우면 `false` 기본값, 스크롤바 드래그해서 이동 가능
  },
});