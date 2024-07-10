window.addEventListener('scroll', () => {
    var contactMe1 = document.getElementById('contactMe1');
    var contactMe2 = document.getElementById('contactMe2');
    var heightWindow = window.innerHeight;
    var distance1 = contactMe1.getBoundingClientRect().top;
    var distance2 = contactMe2.getBoundingClientRect().top;
    if (distance1 <= heightWindow * 0.8) {
        contactMe1.classList.add('show')
    }
    else {
        contactMe1.classList.remove('show')
    }
    if (distance2 <= heightWindow*0.7 ) {
        contactMe2.classList.add('show')
    }
    else {
        contactMe2.classList.remove('show')
    }

})