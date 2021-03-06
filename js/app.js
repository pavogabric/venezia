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
    if(document.body.scrollTop > 75 || document.documentElement.scrollTop > 75) {
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


const fadeRight = document.querySelectorAll('.fade-right');
const fadeLeft = document.querySelectorAll('.fade-left');

const photosObserverOptions = {
    threshold: 0.2
};

const photosObserver = new IntersectionObserver(function(entries, photosObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('appear');
            photosObserver.unobserve(entry.target);
        }
    })
}, photosObserverOptions);

fadeLeft.forEach(photo => {
    photosObserver.observe(photo);
});

fadeRight.forEach(photo => {
    photosObserver.observe(photo);
});

const fadeUpHeadings = document.querySelectorAll('.fade-up-heading');
const fadeUpHeadingsOptions = {
    rootMargin: "0px 0px 10px 0px"
};

const fadeUpHeadingsObserver = new IntersectionObserver(function(entries, fadeUpHeadingsObserver) {
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('appear');
            fadeUpHeadingsObserver.unobserve(entry.target);
        }
    })
}, fadeUpHeadingsOptions);

fadeUpHeadings.forEach(heading => {
    fadeUpHeadingsObserver.observe(heading);
})

const fadeParagraphs = document.querySelectorAll('.fade-paragraphs');
const fadeParagraphsOptions = {
    rootMargin: "0px 0px 150px 0px"
};

const fadeParagraphsObserver = new IntersectionObserver(function(entries, fadeParagraphsObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('appear');
            fadeParagraphsObserver.unobserve(entry.target);
        }
    })
}, fadeParagraphsOptions);

fadeParagraphs.forEach(paragraph => {
    fadeParagraphsObserver.observe(paragraph);
})

const galleryFade = document.querySelectorAll('.gallery-fade');
const galleryFadeOptions = {
    threshold: 0.1
};

const galleryFadeObserver = new IntersectionObserver(function(entries, galleryFadeObserver){
    entries.forEach(entry => {
        if(!entry.isIntersecting) {
            return
        } else {
            entry.target.classList.toggle('appear');
            galleryFadeObserver.unobserve(entry.target);
        }
    })
}, galleryFadeOptions);

galleryFade.forEach(galleryPhoto => {
    galleryFadeObserver.observe(galleryPhoto);
});