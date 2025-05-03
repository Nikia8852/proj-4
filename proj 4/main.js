document.addEventListener("DOMContentLoaded", () => {
  let lastIsLargeScreen = window.innerWidth > 1511;
  let executed = false;

  function moveBtns() {
    const wrapper = document.querySelector(".hero__wrapper");
    const btns = document.querySelector(".hero__btns");
    const video = document.querySelector(".hero-video__wrapper");
    const content = document.querySelector(".events__content");
    const items = document.querySelectorAll(".events__item");

    if (!wrapper || !btns || !video || !content || items.length < 2)
      return false;

    const isLargeScreen = window.innerWidth > 1511;

    if (isLargeScreen !== lastIsLargeScreen) {  
      if (isLargeScreen) {
        wrapper.appendChild(btns);
        items[1].after(content);
      } else {
        wrapper.insertBefore(btns, video);
      }
      lastIsLargeScreen = isLargeScreen;
    }

    return true; // все вдалося
  }

  // Спробуй 50 разів, кожні 100 мс (тобто ~5 секунд)
  const interval = setInterval(() => {
    if (executed) {
      clearInterval(interval);
      return;
    }

    const success = moveBtns();
    if (success) {
      executed = true;
      clearInterval(interval);
    }
  }, 100);

  window.addEventListener("resize", moveBtns);
});
