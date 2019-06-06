//burger-menu header
const burger = document.querySelector(".burger");
const navigation = document.querySelector(".header__sidebar");
const link = document.getElementsByClassName("sidebar__link");

function triggerMobileMenu() {
  burger.classList.toggle("burger--active");
  navigation.classList.toggle("header__sidebar--active");
  document.body.classList.toggle("hidden");
}

burger.addEventListener("click", function() {
  triggerMobileMenu();
});

for (let i = 0; i < link.length; i++) {
  link[i].addEventListener("click", function(e) {
    burger.classList.remove("burger--active");
    navigation.classList.remove("header__sidebar--active");
    document.body.classList.remove("hidden");
  });
}

//v-acco team-section
const teamAcco = document.querySelector(".team__list");
const teamTitle = document.getElementsByClassName("team__name");
const teamDesc = document.getElementsByClassName("team__desc");

teamAcco.addEventListener("click", function(e) {
  if (e.target.classList.contains("team__name--active")) {
    e.target.classList.remove("team__name--active");
  } else if (e.target.classList.contains("team__name")) {
    for (let i = 0; i < teamTitle.length; i++) {
      teamTitle[i].classList.remove("team__name--active");
    }
    e.target.classList.toggle("team__name--active");
  }
});

//h-acco team-section

const menuAcco = document.querySelector(".menu__list");
const menuTitle = document.getElementsByClassName("menu__item");
const menuDesc = document.getElementsByClassName("menu__item-desc");

menuAcco.addEventListener("click", function(e) {
  let currentProduct = e.target.closest(".menu__item");
  if (currentProduct.classList.contains("menu__item--active")) {
    currentProduct.classList.remove("menu__item--active");
  } else if (currentProduct.classList.contains("menu__item")) {
    for (let i = 0; i < menuTitle.length; i++) {
      menuTitle[i].classList.remove("menu__item--active");
    }
    currentProduct.classList.toggle("menu__item--active");
  }
});

//slider jquery carousel

const owl = $(".owl-carousel");
owl.owlCarousel({
  items: 1,
  loop: true
});
$(".slider__arrow--right").click(function(e) {
  e.preventDefault();
  owl.trigger("next.owl.carousel");
});
$(".slider__arrow--left").click(function(e) {
  e.preventDefault();
  owl.trigger("prev.owl.carousel", [300]);
});

// Отправка формы
const form = document.querySelector(".order__form");
const submitButton = document.querySelector(".order__button-submit");
const popup = document.querySelector(".popup");
const popupClose = document.querySelector(".popup__button");
const popupText = document.querySelector(".popup__desc");

form.onsubmit = function(e) {
  e.preventDefault();
};
submitButton.addEventListener("click", function(e) {
  e.preventDefault();
  const formData = new FormData(form);
  formData.append("to", "HD-74@yandex.ru");
  const xhr = new XMLHttpRequest();
  xhr.open("POST", "https://webdev-api.loftschool.com/sendmail");
  xhr.send(formData);
  xhr.addEventListener("load", function() {
    const response = JSON.parse(xhr.response);
    if (response.status) {
      popup.classList.add("popup--active");
    } else {
      popup.classList.add("popup--active");
      popupText.innerText = "Ошибка сервера";
    }
  });
});

popupClose.addEventListener("click", function(e) {
  popup.classList.remove("popup--active");
});

//slideshow

const item = document.getElementsByClassName("reviews__all-pic");
const itemGirl1 = document.querySelector(".reviews__all-girl");
const itemGirl2 = document.querySelector(".reviews__all-girl2");
const itemGuy = document.querySelector(".reviews__all-guy");
const topPic = document.querySelector(".reviews__top-img");
const topTitle = document.querySelector(".reviews__top-title");
const topReview = document.querySelector(".reviews__top-text");
const topAuthor = document.querySelector(".reviews__top-author");

itemGirl1.addEventListener("click", function(e) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove("reviews--active");
  }
  e.target.classList.add("reviews--active");
  topPic.src = "./img/reviews/girl.jpg";
  topTitle.innerText = "Лучший перекус";
  topReview.innerText =
    "Я ем малыми порциями, но часто. Это повышает мою продуктивность в разы. В течение дня сижу за компьютером и часто отходить в кафе или на кухню просто не могу себе позволить. А батончик – он всегда под рукой. Это приятно и удобно.";
  topAuthor.innerText = "Алёна Хмельницкая";
});
itemGirl2.addEventListener("click", function(e) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove("reviews--active");
  }
  e.target.classList.add("reviews--active");
  topPic.src = "./img/reviews/girl2.jpg";
  topTitle.innerText = "Лучшие батончики премиум уровня";
  topReview.innerText =
    "Батончики понравились. На мой взгляд слегка завышена цена по сравнению с конкурентами, однако, как говорится – оно того стоит. Нравится носить с собой, нравится держать в руке. Ну и конечно же, кушать. Идеально утоляют голод, хоть и не надолго. Через час уже ем ещё один. Но это скорее плюс, чем минус.";
  topAuthor.innerText = "Мария Орлова";
});
itemGuy.addEventListener("click", function(e) {
  for (let i = 0; i < item.length; i++) {
    item[i].classList.remove("reviews--active");
  }
  e.target.classList.add("reviews--active");
  topPic.src = "./img/reviews/guy.jpg";
  topTitle.innerText = "Идеально подходят для спортсменов";
  topReview.innerText =
    "Я ем малыми порциями, но часто. Это повышает мою продуктивность в разы. В течение дня сижу за компьютером и часто отходить в кафе или на кухню просто не могу себе позволить. А батончик – он всегда под рукой. Это приятно и удобно.";
  topAuthor.innerText = "Вадим Грачев";
});
