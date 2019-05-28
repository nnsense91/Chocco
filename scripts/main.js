const burger = document.querySelector('.burger');
const navigation = document.querySelector('.header__sidebar')

function triggerMobileMenu() {    
    burger.classList.toggle('burger--active');
    navigation.classList.toggle('header__sidebar--active');
    document.body.classList.toggle('hidden');
}

burger.addEventListener('click', function(){
    triggerMobileMenu();
})

