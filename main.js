(function waitForElementsAndInit() {
  const content = document.querySelector(".events__content");
  const items = document.querySelectorAll(".events__item");

  if (!content || items.length < 2) {
    setTimeout(waitForElementsAndInit, 100);
    return;
  }

  let lastScreenState = null;

  function moveElements() {
    const isLarge = window.innerWidth > 1511;
    if (lastScreenState === isLarge) return;

    if (isLarge) {
      items[1].after(content);
    }

    lastScreenState = isLarge;
  }

  moveElements();
  window.addEventListener("resize", moveElements);
})();
