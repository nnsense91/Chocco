//burger-menu header
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__sidebar')

function triggerMobileMenu() {
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('header__sidebar--active');
    document.body.classList.toggle('hidden');
}

burger.addEventListener('click', function () {
    triggerMobileMenu();
})

//v-acco team-section
const teamAcco = document.querySelector('.team__list');
const teamTitle = document.getElementsByClassName('team__post');
const teamDesc = document.getElementsByClassName('team__desc');

teamAcco.addEventListener('click', function (e) {
    if (e.target.classList.contains('team__post--active')) {
        e.target.classList.remove('team__post--active');
    } else if (e.target.classList.contains('team__post')) {
        for (let i = 0; i < teamTitle.length; i++) {
            teamTitle[i].classList.remove('team__post--active');
        }
        e.target.classList.toggle('team__post--active');
    }
})

//h-acco team-section

const menuAcco = document.querySelector('.menu__list');
const menuTitle = document.getElementsByClassName('menu__item');
const menuDesc = document.getElementsByClassName('menu__item-desc');

menuAcco.addEventListener('click', function (e) {
    let currentProduct = e.target.closest('.menu__item');
    if (currentProduct.classList.contains('menu__item--active')) {
        currentProduct.classList.remove('menu__item--active')
    } else if (currentProduct.classList.contains('menu__item')) {
        for (let i = 0; i < menuTitle.length; i++) {
            menuTitle[i].classList.remove('menu__item--active');
        }
        currentProduct.classList.toggle('menu__item--active');
    }
})