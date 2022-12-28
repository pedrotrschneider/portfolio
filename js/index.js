// Code for the nav button toggle
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link')

navToggle.addEventListener('click', () => {
    document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
    link.addEventListener('click', () => {
        document.body.classList.remove('nav-open')
    })
});

// Code for the cool slide in animations
const intersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
});
const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((element) => intersectionObserver.observe(element));

// Code to repeat logo lines for logo animation
const node = document.querySelector('.repeat');
[...Array(25)].forEach(_ => {
    node.parentNode.insertBefore(node.cloneNode(true), node);
});

// Code to show portfolio modals
const portfolioItems = document.querySelectorAll('.portfolio__item');
const portfolioModals = document.querySelectorAll('.portfolio-modal');

portfolioItems.forEach((item, i) => {
    item.addEventListener('click', () => {
        portfolioModals[i].classList.add('opened');
        portfolioModals[i].focus();
    });
});

// Code for close button of portfolio modals
const portfolioModalCloseButtons = document.querySelectorAll('.portfolio-modal__close');
document.querySelectorAll('.portfolio-modal__close').forEach((item, i) => {
    item.addEventListener('click', () => {
        item.parentElement.parentElement.parentElement.classList.remove('opened');
    });
});