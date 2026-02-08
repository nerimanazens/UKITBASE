let searcicon = document.querySelector('.fa-magnifying-glass');
let searchBox = document.querySelector('.search-input');
searcicon.addEventListener('click', () => {
    searchBox.classList.toggle('active');
});
let hamburgericon=document.querySelector('.fa-bars');
let mobileNav=document.querySelector('.mobile-nav');
let mobileNavCloseIcon=document.querySelector('.mobile-nav-close-icon');
mobileNavCloseIcon.addEventListener('click',()=>{
    mobileNav.classList.remove('active');
    document.body.classList.remove('no-scroll');
});
hamburgericon.addEventListener('click',()=>{
    mobileNav.classList.toggle('active');
    document.body.classList.toggle('no-scroll');
});