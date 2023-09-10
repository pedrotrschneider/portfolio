// Code for the nav button toggle
function setupNavButtons() {
    const navToggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelectorAll('.nav__link');
    
    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });
    
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open')
        })
    });
}

// Code for the cool slide in animations
function setupSlideAnimations() {
    const intersectionObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });
    
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((element) => intersectionObserver.observe(element));
}

// Code to repeat logo lines for logo animation
function repeatLogoLines() {
    const node = document.querySelector('.repeat');
    [...Array(25)].forEach(_ => {
        node.parentNode.insertBefore(node.cloneNode(true), node);
    });
}

function setupModals() {
    // Code to show portfolio modals
    const portfolioItems = document.querySelectorAll('.portfolio__item');
    const portfolioModals = document.querySelectorAll('.portfolio-modal');
    
    portfolioItems.forEach((item, i) => {
        item.addEventListener('click', () => {
            portfolioModals[i].classList.add('opened');
            portfolioModals[i].focus();
            document.body.classList.add('stop-scrolling');
            document.documentElement.classList.add('stop-scrolling');
        });
    });

    // Code for close button of portfolio modals
    const portfolioModalCloseButtons = document.querySelectorAll('.portfolio-modal__close');
    portfolioModalCloseButtons.forEach((item, i) => {
        item.addEventListener('click', () => {
            item.parentElement.parentElement.parentElement.classList.remove('opened');
            document.body.classList.remove('stop-scrolling');
            document.documentElement.classList.remove('stop-scrolling');
        });
    });
}

function main() {
    setupNavButtons();
    setupSlideAnimations();
    repeatLogoLines();
    setupModals();
}