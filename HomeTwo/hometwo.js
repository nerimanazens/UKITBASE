let buttons = document.querySelectorAll('.accordion-header');
let contents = document.querySelectorAll('.accordion-content');
buttons.forEach(button => {

    button.addEventListener('click', yoxlama => {
        let content = button.nextElementSibling;
        let i = button.querySelector('i');

        document.querySelectorAll('.accordion-content.active').forEach(otherContent => {
            if (otherContent !== content) {
                otherContent.classList.remove('active');
                let j = document.querySelector('.fa-chevron-up');
                j.classList.remove('fa-chevron-up');
                j.classList.add('fa-chevron-down');
            }
        });
        content.classList.toggle('active');
        i.classList.remove('fa-chevron-down');
        i.classList.add('fa-chevron-up');
        if (!content.classList.contains('active')) {
            i.classList.remove('fa-chevron-up');
            i.classList.add('fa-chevron-down');
        }
    });
});





// Hamburger Menu Toggle
const hamburgerIcon = document.querySelector('.hamburger-icon');
const hamburgerMenu = document.querySelector('.hamburger-menu');
const exiticon = document.querySelector('.hamburger-menu-exit');
hamburgerIcon.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    document.body.classList.add('no-scroll');
});
exiticon.addEventListener('click', () => {
    hamburgerMenu.classList.remove('active');
    document.body.classList.remove('no-scroll');
});



// scroll to section

const scroolbuttons = document.querySelectorAll('.secondary-nav-container a');
const sections = document.querySelectorAll('.main-section-container');

for (let i = 0; i < scroolbuttons.length; i++) {
    scroolbuttons[i].addEventListener('click', function (event) {
        event.preventDefault();
        sections[i].scrollIntoView({
            behavior: 'smooth'
        });
        scroolbuttons[i].style.borderBottom = '3px solid #3498db'; 
        scroolbuttons[i].style.color = '#090d0fff';
        for (let j = 0; j < scroolbuttons.length; j++) {
            if (j !== i) {
                scroolbuttons[j].style.borderBottom = 'none';
                scroolbuttons[j].style.color = '#2c3e50'; 
            }
        }
    });

}
