// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from "./functions.js";
// Підключення списку активних модулів
import { flsModules } from "./modules.js";

import * as modules from "./functions.js";

import mixitup from "mixitup";

if (document.querySelector(".shop-list__main")) {
  var mixer = mixitup(".shop-list__main", {
    selectors: {
      target: "[data-mix]",
    },
    // load: {
    //     filter: '.mix-no-grid'
    // },
    animation: {
      effects: "fade translateZ(-100px)",
    },
    animation: {
      effects: "fade translateZ(-100px)",
      easing: "cubic-bezier(0.645, 0.045, 0.355, 1)",
    },
  });
}

incrisLikeAndShop();

function incrisLikeAndShop() {
  document.addEventListener("click", function (e) {
    const target = e.target;

    if (target.closest(".icon-shop")) {
      const badgeShop = document.querySelector(".badge-shop");
      badgeShop.textContent = (+badgeShop.textContent + 1).toString();
    }
    if (target.closest(".icon-like")) {
      const badgeLike = document.querySelector(".badge-like");
      badgeLike.textContent = (+badgeLike.textContent + 1).toString();
    }
  });
}

//view cenge
document.addEventListener("click", function (e) {
  const activClass = document.querySelector(".active-view");
  const prodCard = document.querySelectorAll(".car-prod-midl");
  const gridInner = document.querySelector(".shop-list__main");

  const target = e.target;

  if (target.closest("[data-view]")) {
    if (!target.classList.contains("active-view")) {
      prodCard.forEach((element) => {
        element.classList.toggle("car-prod-midl_list");
      });
      gridInner.classList.toggle("shop-list__main_grid");
      activClass.classList.remove("active-view");
      target.classList.add("active-view");
    }
  }
});

///prod photo
document.addEventListener("click", function (e) {
  let bigImg = document.querySelector("[data-main-img]");
  const target = e.target;
  if (target.closest("[data-smolle-img]")) {
    bigImg.src = target.src;
  }
});

/////tab
document.addEventListener("click", function (e) {
  let tabActive = document.querySelector("._tab-active");
  const target = e.target;
  if (target.closest(".prod-tab__title")) {
    if (!e.target.classList.contains("_tab-active")) {
      tabActive.classList.remove("_tab-active");
      target.classList.add("_tab-active");
    }
  }
});

//close side-filter
document.addEventListener("click", (e) => {

  if (e.target.closest(".cdk-overlay-backdrop-showing")) {
    modules.bodyLockToggle();
    document.querySelector(".cdk-overlay-container").style = "display: none";
    document
      .querySelector(".cdk-overlay-container")
      .children[0].classList.toggle("cdk-overlay-backdrop-showing");
    document
      .querySelector(".shop-list-page__asid")
      .classList.toggle("shop-list-page__asid_open");
  }


  if (e.target.closest(".filter-button")) {
    modules.overlay();
    document
      .querySelector(".shop-list-page__asid")
      .classList.toggle("shop-list-page__asid_open");
  }

});

activeHeaderUrl();

function activeHeaderUrl() {
  const menuLinks = document.querySelectorAll(".navigation__links a");
  console.dir(document.title);
  // Проходимся по каждой ссылке и проверяем, совпадает ли её относительный URL с текущим относительным URL
  menuLinks.forEach((link) => {
    if (link.getAttribute("href").replace("..", "") === location.pathname) {

      link.classList.add("navigation__link_action"); // Добавляем класс активной ссылке
    } else {
      link.classList.remove("navigation__link_action"); // Удаляем класс активной ссылки
    }
  });
}

// const allpage = ["/blog_details.html","/blog_list.html","/contact_us.html","/home.html","/index.html","/login.html","/register.html","/shop_details.html","/shop_list.html"];

const breadCrumbs = document.querySelector(".bread-crumbs");
const corentUrl = location.pathname;
const titlePage = document.title;

if(breadCrumbs){
  const ululbreadCrumbs = breadCrumbs.querySelector("ul");
  let newEl = `<li class="bread-crumbs__link link-active">${titlePage}</li>`;
  ululbreadCrumbs.insertAdjacentHTML("beforeend",newEl);

}