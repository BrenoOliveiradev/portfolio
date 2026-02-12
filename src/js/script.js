// Menu mobile
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    if (menuIcon.classList.contains('fa-bars')) {
        menuIcon.classList.remove('fa-bars');
        menuIcon.classList.add('fa-xmark');
    } else {
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }

    navbar.classList.toggle('active');
};

// Scroll events
window.addEventListener('scroll', () => {

    // Sticky header
    header.classList.toggle('sticky', window.scrollY > 100);

    // Fecha menu mobile ao rolar
    if (navbar.classList.contains('active')) {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    }

    // Scroll spy
    sections.forEach(section => {
        const top = window.scrollY;
        const offset = section.offsetTop - 150;
        const height = section.offsetHeight;
        const id = section.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => link.classList.remove('active'));

            const activeLink = document.querySelector(`header nav a[href*="${id}"]`);
            if (activeLink) activeLink.classList.add('active');
        }
    });
});

// Fechar menu ao clicar no link
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        navbar.classList.remove('active');
        menuIcon.classList.remove('fa-xmark');
        menuIcon.classList.add('fa-bars');
    });
});

// Contato
const form = document.getElementById('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name');
    const message = document.getElementById('message');
    const telephone = '5585991204161';

    const text = `Olá, meu nome é ${name.value}. ${message.value}`

    const msgFormatted = encodeURIComponent(text);

    const url = `https://wa.me/${telephone}?text=${msgFormatted}`;

    window.open(url, '_blank');
    form.reset();

});

 

// Scroll reveal
 ScrollReveal({ 
    // reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top' });
 ScrollReveal().reveal('.home-img, .projects-box, .contact form, .contact-img', { origin: 'bottom' });
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left' });
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right' });

// Typed.js
const typed = new Typed('.multiple-text', {
    strings: ['Desenvolvedor Front-End', 'Desenvolvedor Web', 'Criador de Experiências Digitais'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
