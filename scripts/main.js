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
      console.log("Форма отправлена");
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

// //aside - smooth scroll
// $('.aside__link').on('click', function(e) {
//   e.preventDefault();
//   $(".aside__active").removeClass("aside__active");
//   $('html, body').animate({scrollTop: $($(this).attr("href")).offset().top}, 500);
// });

// //aside scroll
// $(window).scroll(()=> {
//   let wTop = $(window).scrollTop();
//   let welcome = $("#welcome").offset().top;
//   let why = $("#why").offset().top;
//   let product = $("#product").offset().top;
//   let team = $("#team").offset().top;
//   let menu = $("#menu").offset().top;
//   let reviews = $("#reviews").offset().top;
//   let order = $("#order").offset().top;
//   let contacts = $("#contacts").offset().top;
//   if ((why-wTop) < 100 && (why-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asWhy').addClass("aside__active");
//   } else if ((welcome-wTop) < 100 && (welcome-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asWelcome').addClass("aside__active");
//   } else if ((product-wTop) < 100 && (product-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asProduct').addClass("aside__active");
//   } else if ((team-wTop) < 100 && (team-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asTeam').addClass("aside__active");
//   } else if ((menu-wTop) < 100 && (menu-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asMenu').addClass("aside__active");
//   } else if ((reviews-wTop) < 100 && (reviews-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asReviews').addClass("aside__active");
//   } else if ((order-wTop) < 100 && (order-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asOrder').addClass("aside__active");
//   } else if ((contacts-wTop) < 100 && (contacts-wTop) > -100) {
//     $(".aside__active").removeClass("aside__active");
//     $('#asContacts').addClass("aside__active");
//   };
// });

const sections = $(".section");
const display = $(".maincontent");
let inscroll = false;

const md = new MobileDetect(window.navigator.userAgent);
const isMobile = md.mobile();

const switchActiveClassSideMenu = menuItemIndex => {
  $(".aside__item")
    .eq(menuItemIndex)
    .addClass("aside__active")
    .siblings()
    .removeClass("aside__active");
};

const performTransition = function(sectionEq) {
  if (inscroll) return;

  inscroll = true;
  const position = sectionEq * -100 + "%";

  sections
    .eq(sectionEq)
    .addClass("section-active")
    .siblings()
    .removeClass("section-active");

  display.css({
    transform: `translateY(${position})`
  });

  setTimeout(function() {
    switchActiveClassSideMenu(sectionEq);
    inscroll = false;
  }, 1300); //1300 - TransitionDuration of .maincontent (1s) + 300ms delay
};

const scrollToSection = function(direction) {
  const activeSection = sections.filter(".section-active");
  const nextSection = activeSection.next();
  const prevSection = activeSection.prev();

  if (direction === "next" && nextSection.length) {
    performTransition(nextSection.index());
  }

  if (direction === "prev" && prevSection.length) {
    performTransition(prevSection.index());
  }
};

$(".wrapper").on("wheel", function(e) {
  const deltaY = e.originalEvent.deltaY;

  if (deltaY > 0) {
    scrollToSection("next");
  }

  if (deltaY < 0) {
    scrollToSection("prev");
  }
});

$(".wrapper").on("touchmove", e => {
  e.preventDefault();
});

$(document).on("keydown", e => {
  switch (e.keyCode) {
    case 40:
      scrollToSection("next");
    case 38:
      scrollToSection("prev");
      break;
  }
});

$("[data-scroll-to]").on("click", e => {
  e.preventDefault();

  const target = $(e.currentTarget).attr("data-scroll-to");
  performTransition(target);
});

if (isMobile) {
  $(window).swipe({
    swipe: function(
      event,
      direction,
      distance,
      duration,
      fingerCount,
      fingerData
    ) {
      const nextOrPrev = direction === "up" ? "next" : "prev";
      scrollToSection(nextOrPrev);
    }
  });
}

// video player

let player;
function onYouTubeIframeAPIReady() {
  player = new YT.Player("yt-player", {
    height: "370",
    width: "660",
    videoId: "HM1NfQ4GsB0",
    playerVars: {
      controls: 0,
      disablekb: 0,
      showinfo: 0,
      rel: 0,
      autoplay: 0,
      modestbranding: 0
    },
    events: {
      onReady: onPlayerReady,
      onStateChange: onPlayerStateChange
    }
  });
}

function onPlayerStateChange(event) {
  const playerButton = $(".player__start");
  switch (event.data) {
    case 1:
      $(".player__wrapper").addClass("player__wrapper--active");
      playerButton.addClass("paused");
      break;
    case 2:
      playerButton.removeClass("paused");
      break;
  }
}

function onPlayerReady() {
  const duration = player.getDuration();
  let interval;

  clearInterval(interval);

  interval = setInterval(() => {
    const completedSeconds = player.getCurrentTime();
    const percent = (completedSeconds / duration) * 100;

    $(".player__playback-button").css({
      left: `${percent}%`
    });
  }, 1000);
}

$(".player__start").on("click", e => {
  const btn = $(e.currentTarget);

  if (btn.hasClass("paused")) {
    player.pauseVideo();
  } else {
    player.playVideo();
  }
});

$(".player__duration-line").on("click", e => {
  e.preventDefault();
  const bar = $(e.currentTarget);
  const newButtonPosition = e.pageX - bar.offset().left;
  const clickedPercent = (newButtonPosition / bar.width()) * 100;
  const newPlayerTime = (player.getDuration() / 100) * clickedPercent;

  $(".player__playback-button").css({
    left: `${clickedPercent}%`
  });

  player.seekTo(newPlayerTime);
});

$(".player__splash").on("click", e => {
  player.playVideo();
});

// sound
setTimeout(function() {
  const volBtn = $(".player__volume-button");
  const posVolBtnPx = volBtn.css("left");
  const posVolBtn = parseInt(posVolBtnPx);
  const volBar = document.querySelector(".player__volume-line");
  const volBarStyle = getComputedStyle(volBar);
  const volBarWidth = parseInt(volBarStyle.width);

  const posVolumePercent = (posVolBtn / volBarWidth) * 100;
  console.log(posVolumePercent);
  player.setVolume(posVolumePercent);

  $(".player__volume-line").on("click", e => {
    e.preventDefault();
    const barVol = $(e.currentTarget);
    const newButtonVolPosition = e.pageX - barVol.offset().left;
    const clickedVolPercent = (newButtonVolPosition / barVol.width()) * 100;

    if (clickedVolPercent < 100) {
      $(".player__volume-button").css({
        left: `${clickedVolPercent}%`
      });
    } else {
      $(".player__volume-button").css({
        left: `100%`
      });
    }

    player.unMute();
    player.setVolume(clickedVolPercent);
  });

  $(".player__volume-pic").on("click", e => {
    if (player.isMuted()) {
      player.unMute();
      $(".player__volume-button").css({
        left: `${posVolumePercent}%`
      });
      player.setVolume(posVolumePercent);
    } else {
      player.mute();
      $(".player__volume-button").css({
        left: 0
      });
    }
  });
}, 2000);
