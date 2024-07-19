
window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const sections = document.querySelectorAll('section');
    const section = document.querySelectorAll('#sectionSelect');
    const sectionSelect = section[0].children;
    const contactMe1 = document.getElementById('contactMe1');
    const contactMe2 = document.getElementById('contactMe2');
    const heightWindow = window.innerHeight;
    const distance1 = contactMe1.getBoundingClientRect().top;
    const distance2 = contactMe2.getBoundingClientRect().top;
    const distanceHome = home.getBoundingClientRect().top;
    for (i = 0; i < sections.length; i++) {

        var bounding = sections[i].getBoundingClientRect();
        if (bounding.top < 400 &&
            bounding.bottom > 412
        ) {
            sectionSelect[i].classList.add('selectSection')
        }
        else {
            sectionSelect[i].classList.remove('selectSection')
        }
    }

    if (window.scrollY === 0) {
        menu.classList.remove('showBorderShadow')
    }
    else {
        menu.classList.add('showBorderShadow')
    }
    if (distance1 <= heightWindow * 0.8) {
        contactMe1.classList.add('show1')
    }
    else {
        contactMe1.classList.remove('show1')
    }
    if (distance2 <= heightWindow * 0.7) {
        contactMe2.classList.add('show1')
    }
    else {
        contactMe2.classList.remove('show1')
    }

})
var openMenu = false;
const closeMenu = document.getElementById('close-menu');
closeMenu.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    const menuContent = document.getElementById('menu-content');
    openMenu = !openMenu;
    if (openMenu) {
        menu.classList.add('show2');
        menuContent.classList.add('show2');
        closeMenu.textContent = '✕ ';
    }
    else {
        menu.classList.remove('show2');
        menuContent.classList.remove('show2');
        closeMenu.textContent = '☰'
    }
})

let mudaCor = true;
const lightBlack = document.getElementById('lightBlack');
lightBlack.addEventListener('click', () => {
    const body = document.body;
    if (mudaCor) {
        body.classList.remove('secondary-bg');
        body.classList.add('primary-bg');
        lightBlack.textContent = '☀️';
    }
    else {
        body.classList.add('secondary-bg');
        body.classList.remove('primary-bg');
        lightBlack.textContent = '🌙';
    }
    mudaCor = !mudaCor;
})
