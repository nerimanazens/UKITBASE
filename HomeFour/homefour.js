let close = document.getElementById("notification-close");
let notificationBar = document.querySelector(".notification-bar");

close.addEventListener("click", function () {
    notificationBar.classList.add("close");
});

let hamburgerIcon = document.querySelector(".hamburger-icon");
let hamburgerClose = document.querySelector(".hamburger-menu-exit");
let hamburgerMenu = document.querySelector(".hamburger-menu");
hamburgerIcon.addEventListener("click", function () {
    hamburgerMenu.style.transform = "translateX(0)";
    document.body.style.overflow = "hidden";
});
hamburgerClose.addEventListener("click", function () {
    hamburgerMenu.style.transform = "translateX(-100%)";
    document.body.style.overflow = "auto";
});
// Carousel Functionality



let track = document.querySelector('.carousel-track');
let dots = document.querySelectorAll('.dot');

dots[0].classList.add('active');

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        let olcu;
        
        if (window.innerWidth <= 768) {
            olcu = 100;  // 1 sütun (mobil)
        } 
        else if (window.innerWidth <= 1120) {
            olcu = 50;   // 2 sütun (tablet)
        } 
        else {
            olcu = 33.5; // 3 sütun (desktop)
        }
        
        track.style.transform = `translateX(-${i * olcu}%)`;
        
        document.querySelector('.dot.active')?.classList.remove('active');
        dot.classList.add('active');
    });
});
let track2 = document.querySelector('.carousel-track2');
let dots2 = document.querySelectorAll('.dot2');

dots2[0].classList.add('active');

dots2.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        let olcu;
        
        if (window.innerWidth <= 768) {
            olcu = 100;  // 1 sütun (mobil)
        } 
        else if (window.innerWidth <= 1120) {
            olcu = 50;   // 2 sütun (tablet)
        } 
        else {
            olcu = 33.5; // 3 sütun (desktop)
        }
        
        track2.style.transform = `translateX(-${i * olcu}%)`;
        
        document.querySelector('.dot2.active')?.classList.remove('active');
        dot.classList.add('active');
    });
});

const section = document.querySelector('.aditional-help-bottom');
const left = document.querySelector('.aditional-help-bottom-left');
const right = document.querySelector('.aditional-help-bottom-right');

window.addEventListener('scroll', () => {
    const sectionTop = section.getBoundingClientRect().top;
    const screenHeight = window.innerHeight;

    if (sectionTop < screenHeight - 100) {
        left.classList.add('show');
        right.classList.add('show');
    }
});

