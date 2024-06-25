document.addEventListener("DOMContentLoaded", () => {
  document.body.addEventListener("click", (e) => {
    // data-link가 있는 속성 (이동 가능하게 만듬)
    if (e.target.matches("[data-link]")) {
      if (e.target.matches("[data-language]")) {
      }
      e.preventDefault();
      navigateTo(e.target.href);
    }
  });
  // 라우팅 (view불러오기)
  // console.log("test2");
  router();
});
