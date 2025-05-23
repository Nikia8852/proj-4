function burger() {
  const burger = document.querySelector(".header__burger");
  const modalWin = document.querySelector(".nav-modal");
  burger.addEventListener("click", () => {
    modalWin.classList.toggle("active-modal");
    modalWin.addEventListener("click", () => {
      modalWin.classList.remove("active-modal");
    });
    if (modalWin.classList.contains("active-modal")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "visible";
    }
  });
}
function moveEl() {
  const content = document.querySelector(".events__content");
  const items = document.querySelectorAll(".events__item");
  const eventsEl = document.querySelector(".events__items");
  const mediaScreen = window.matchMedia("(max-width: 1512px)");

  function checkScreenWidth(e) {
    if (e.matches) {
      eventsEl.before(content);
    } else {
      items[1].after(content);
    }
  }
  mediaScreen.addEventListener("change", checkScreenWidth);
  checkScreenWidth(mediaScreen);
}

function nav() {
  const burger = document.querySelector(".header__burger");
  const nav = document.querySelector(".navigation");

  burger.addEventListener("click", () => {
    if (nav.style.display === "block") {
      nav.style.display = "none";
    } else {
      nav.style.display = "block";
    }
  });
}

function buttonsAcvtive() {
  const buttons = document.querySelectorAll(".hero__btn");

  buttons.forEach((e) => {
    e.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("btn__active"));
      e.classList.add("btn__active");
    });
  });
}
function openBasket() {
  const backgroundEl = document.querySelector(".menu__result");
  const openBtnEl = document.querySelector(".header__basket");

  openBtnEl.addEventListener("click", (e) => {
    e.stopPropagation();
    backgroundEl.classList.toggle("is-hidden");
  });

  setTimeout(() => {
    document.addEventListener("click", () => {
      backgroundEl.classList.remove("is-hidden");
    });
  });
}

function menu() {
  const cards = document.querySelectorAll(".card-price__btns");
  const resultEl = document.querySelectorAll(".result-list__item");
  const totalPriceRes = document.querySelector(".total-price");
  const totalCard = document.querySelector(".total-card");
  function updateResult(name, number) {
    resultEl.forEach((e) => {
      const numberCard = e.querySelector(".price");
      const label = e
        .querySelector("p:first-child")
        .textContent.replace(":", "")
        .trim();
      if (label === name) {
        numberCard.textContent = number;
      }
    });
    let totalPrice = 0;
    let totalNum = 0;
    cards.forEach((c) => {
      const cCount = parseInt(c.querySelector("p").textContent);
      const cPrice = parseFloat(c.dataset.price);
      totalPrice += cCount * cPrice;
      totalNum += cCount;
    });
    totalPriceRes.textContent = totalPrice.toFixed(2);
    +"$";
    totalCard.textContent = totalNum;
  }

  cards.forEach((e) => {
    const remove = e.querySelector(".remove");
    const add = e.querySelector(".add");
    const numberCard = e.querySelector("p");
    const name = e.dataset.name;
    const pricePerItem = parseFloat(e.dataset.price);
    let number = 0;

    add.addEventListener("click", () => {
      number++;
      numberCard.textContent = number;
      updateResult(name, number);
    });

    remove.addEventListener("click", () => {
      if (number === 0) return;
      number--;
      numberCard.textContent = number;
      updateResult(name, number);
    });
  });
}
burger();
openBasket();
buttonsAcvtive();
menu();
moveEl();