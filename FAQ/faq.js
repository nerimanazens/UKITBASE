let boxs=document.querySelectorAll('.box-inside');
let boxes=document.querySelectorAll('.sentence');
let buttons=document.querySelectorAll('.fa-plus');

boxs.forEach((box, index)=>{
    box.addEventListener('click',()=>{
        boxes[index].classList.toggle('active');

        buttons[index].classList.remove('fa-plus');
        buttons[index].classList.add('fa-minus');
        if(!boxes[index].classList.contains('active')){
            buttons[index].classList.remove('fa-minus');
            setTimeout(() => {
                buttons[index].classList.add('fa-plus');
            }, 200);
        }
    });
});

let searchIcon=document.querySelector('.fa-magnifying-glass');
let searchbar=document.querySelector('.search-bar');
let closeIcon=document.querySelector('.searchbar-close-icon');
searchIcon.addEventListener('click',()=>{
    searchbar.classList.toggle('active');
});
closeIcon.addEventListener('click',()=>{
    searchbar.classList.remove('active');
});

//mobile nav

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
