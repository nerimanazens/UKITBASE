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
let item = document.querySelectorAll(".accordion-item");
let hidden = document.querySelectorAll(".hidden");
let plus = document.querySelectorAll(".fa-plus")

item.forEach((element, index) => {
    element.addEventListener('click', () => {

        for (let i = 0; i < hidden.length; i++) {
            if (hidden[i].classList.contains('active') && i != index) {
                hidden[i].classList.remove('active');
                item[i].classList.remove('active');
                plus[i].classList.remove('fa-minus');
                plus[i].classList.add('fa-plus');
            }
           
        }
        hidden[index].classList.toggle('active');
        element.classList.toggle('active');

        if (plus[index].classList.contains('fa-plus')) {
            plus[index].classList.remove('fa-plus');
            plus[index].classList.add('fa-minus');
        }
        else {
            plus[index].classList.remove('fa-minus');
            plus[index].classList.add('fa-plus');
        }
    });
}); 
