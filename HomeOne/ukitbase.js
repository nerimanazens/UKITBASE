let hamburgericon = document.querySelector('.hamburger-menu-icon');
let hamburgermenu=document.querySelector('.mobile-nav');

hamburgericon.addEventListener('click', ()=>{
    hamburgermenu.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});

let mobileNavCloseIcon = document.querySelector('.mobile-nav-close-icon');

mobileNavCloseIcon.addEventListener('click', () => {
    hamburgermenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
});

//scroll down
let articles=document.querySelector('.articles');
let scrollDownBtn=document.querySelector('.scroll-down');
scrollDownBtn.addEventListener('click',()=>{
    articles.scrollIntoView({behavior:"smooth" });
});

let arrowup = document.querySelector('.fa-arrow-up');

arrowup.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});