window.addEventListener('scroll', () => {
    var contactMe1 = document.getElementById('contactMe1');
    var contactMe2 = document.getElementById('contactMe2');
    var heightWindow = window.innerHeight;
    var distance1 = contactMe1.getBoundingClientRect().top;
    var distance2 = contactMe2.getBoundingClientRect().top;
    if (distance1 <= heightWindow * 0.8) {
        contactMe1.classList.add('show1')
    }
    else {
        contactMe1.classList.remove('show1')
    }
    if (distance2 <= heightWindow*0.7 ) {
        contactMe2.classList.add('show1')
    }
    else {
        contactMe2.classList.remove('show1')
    }

})
var openMenu = false;
const closeMenu = document.getElementById('close-menu')
closeMenu.addEventListener('click', () => {
    const menu =  document.getElementById('menu');
    const menuContent = document.getElementById('menu-content');
    openMenu = !openMenu;
    if(openMenu){
        menu.classList.add('show2');
        menuContent.classList.add('show2');
        closeMenu.textContent = '✕ ';
    }
    else{
        menu.classList.remove('show2');
        menuContent.classList.remove('show2');
        closeMenu.textContent = '☰'
    }
    console.log('clickado');
})