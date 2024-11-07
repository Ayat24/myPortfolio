
window.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('.navbar a');
    
    sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        if (rect.top <= window.innerHeight / 2 && rect.bottom > window.innerHeight / 2) {
            navLinks[index].classList.add('active');
        } else {
            navLinks[index].classList.remove('active');
        }
    });
});
window.addEventListener('scroll', () => {
    const elements = document.querySelectorAll('.fade-in');
    elements.forEach(element => {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

let lastScrollTop = 0;
const navbar = document.querySelector('.header');

window.addEventListener('scroll', () => {
    let currentScroll =  document.documentElement.scrollTop;
    
    if (currentScroll > lastScrollTop) {
        navbar.style.top = '-60px';
    } else {
        navbar.style.top = '0'; 
    }
    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; 
});
const form = document.querySelector('#contact-form');

form.addEventListener('submit', (e) => {
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    
    if (name === '' || email === '') {
        e.preventDefault(); 
        alert('Please fill out all fields');
    }
});
