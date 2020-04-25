const hamb = document.querySelector('.hamb-menu');
const navContainer = document.querySelector('.slideInNav');
const nav = document.querySelector('.nav__mobile');

function showNav(){
    hamb.classList.toggle('change');
    navContainer.classList.toggle('active');
    nav.classList.toggle('show');
}

const navbar = document.querySelector('header');

window.onscroll = function () {
    if(document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        navbar.classList.add('colored');
    } else {
        navbar.classList.remove('colored');
    }
}

function hideNav(){
    nav.classList.remove('show');
    navContainer.classList.remove('active');
    hamb.classList.remove('change'); 
}





