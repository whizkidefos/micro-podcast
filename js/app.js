'use strict';

// Toggle Element
const toggleElement = (element) => {
    element.classList.toggle('active');
}

// Header Behavior
const navbar = document.querySelector('[data-navbar]');
const navToggleBtn = document.querySelector('[data-nav-toggle-btn]');
const overlay = document.querySelector('[data-overlay]');

const navElementsArray = [navToggleBtn, overlay];

for (let i = 0; i <navElementsArray.length; i++) {
    navElementsArray[i].addEventListener('click', function() {
        toggleElement(navbar);
        toggleElement(overlay);
    });
}

// Sticky Header
const header = document.querySelector('[data-header]');

let lastScrollPosition = 0;

window.addEventListener('scroll', function() {
    let scrollPosition = window.pageYOffset;

    if (scrollPosition > lastScrollPosition) {
        header.classList.remove('active');
    } else {
        header.classList.add('active');
    }

    lastScrollPosition = scrollPosition <= 0 ? 0 : scrollPosition;
});

// Form validation
const input = document.querySelector('[data-input]');
const submitBtn = document.querySelector('[data-submit]');

input.addEventListener('input', function() {
    if (input.checkValidity()) {
        submitBtn.removeAttribute('disabled');
    } else {
        submitBtn.setAttribute('disabled', '');
    }
});

// Back to top
const goTopBtn = document.querySelector('[data-go-top]');


window.addEventListener('scroll', function() {
    window.scrollY >= 200 ? goTopBtn.classList.add('active') : goTopBtn.classList.remove('active');
});