let openMenu = false;
let mudaCor = true;
let currentSlide = 0;
const closeMenu = document.getElementById('close-menu');
const lightBlack = document.getElementById('lightBlack');

function selectSection(sections, sectionSelect) {
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
}

function showShadow(menu) {
    if (window.scrollY === 0) {
        menu.classList.remove('showBorderShadow');
        return;
    }
    return menu.classList.add('showBorderShadow');
}

function showInWindows(element, distance, heightWindow, percentWindows){
    if (distance <= heightWindow * percentWindows) {
        element.classList.add('show1');
        return;
    }
    return element.classList.remove('show1');
}

function showSlides() {  
    const slides = document.getElementsByClassName("project");  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";
    }  
    currentSlide++;  
    if (currentSlide > slides.length) { currentSlide = 1 } 
    slides[currentSlide - 1].style.display = "grid"; 
}  

function moveSlide(n) {  
    currentSlide += n;  
    const slides = document.getElementsByClassName("project");  
    if (currentSlide > slides.length) { currentSlide = 1; }  
    if (currentSlide < 1) { currentSlide = slides.length; }  
    for (let i = 0; i < slides.length; i++) {  
        slides[i].style.display = "none";   
    }  
    slides[currentSlide - 1].style.display = "grid";  
}  

showSlides();  

window.addEventListener('scroll', () => {
    const menu = document.getElementById('menu');
    const sections = document.querySelectorAll('section');
    const section = document.querySelectorAll('#sectionSelect');
    const sectionSelect = section[0].children;
    const contactMe1 = document.getElementById('contactMe1');
    const contactMe2 = document.getElementById('contactMe2');
    const heightWindow = window.innerHeight;
    const distance1 = contactMe1.getBoundingClientRect().top;
    const distance2 = contactMe2.getBoundingClientRect().top;
    selectSection(sections, sectionSelect);
    showShadow(menu);
    showInWindows(contactMe1, distance1, heightWindow, 0.8);
    showInWindows(contactMe2, distance2, heightWindow, 0.7);
})

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
