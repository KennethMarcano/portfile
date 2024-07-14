window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    const home = document.getElementById('home');
    const sections = document.querySelectorAll('section');
    const sectionSelect = document.querySelectorAll('#sectionSelect')
    const contactMe1 = document.getElementById('contactMe1');
    const contactMe2 = document.getElementById('contactMe2');
    const heightWindow = window.innerHeight;
    const distance1 = contactMe1.getBoundingClientRect().top;
    const distance2 = contactMe2.getBoundingClientRect().top;
    const distanceHome = home.getBoundingClientRect().top;
    // console.log(distanceHome)
    // console.log(sectionSelect)
    console.log(sections[2].getBoundingClientRect().top)
    console.log(sections[2].getBoundingClientRect().bottom)
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

    // if(distanceHome === 30){
    //     homeLi.classList.add('selectSection');
    // }
    // else{
    //     homeLi.classList.remove('selectSection');
    // }
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
    console.log('clickado');
})


