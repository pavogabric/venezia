const hamb = document.querySelector('.hamb-menu');
const nav = document.querySelector('.nav__mobile');

function showNav(){
    hamb.classList.toggle('change');
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
    hamb.classList.remove('change'); 
}





