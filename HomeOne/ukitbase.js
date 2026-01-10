let hamburgericon = document.querySelector('.hamburger-menu-icon');
let hamburgermenu=document.querySelector('.mobile-nav');

hamburgericon.addEventListener('click', ()=>{
    hamburgermenu.classList.toggle('active');
});

let mobileNavCloseIcon = document.querySelector('.mobile-nav-close-icon');

mobileNavCloseIcon.addEventListener('click', () => {
    hamburgermenu.classList.remove('active');
});

//scroll down
let articles=document.querySelector('.articles');
let scrollDownBtn=document.querySelector('.scroll-down');
scrollDownBtn.addEventListener('click',()=>{
    articles.scrollIntoView({behavior:"smooth" });
});