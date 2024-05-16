const buttonMenu = document.querySelector('.button__menu');
const menuMobile = document.querySelector('.menuMobile');
let isMenuOpen = false;

buttonMenu.addEventListener('click', function () {
    isMenuOpen ? menuMobile.classList.add('invisible') : menuMobile.classList.remove('invisible');

    isMenuOpen ?  buttonMenu.children[0].setAttribute('src','../assests/icons/menuMobile.svg'):  buttonMenu.children[0].setAttribute('src','../assests/icons/closeMobile.svg');
    
    
    isMenuOpen = !isMenuOpen

})

