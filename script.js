// Theme toggle: switch between sun and moon icon
const darkTheme = document.getElementById('toggle');
darkTheme.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    const icon = darkTheme.querySelector('i');
    if (document.body.classList.contains('dark-theme')) {
        icon.className = 'ri-sun-line';
    } else {
        icon.className = 'ri-moon-line';
    }
});

const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.classList.add('scrolled');
    } else {
        nav.classList.remove('scrolled');
    }
});

// Hamburger menu logic
const hamburBtn = document.getElementById('hamb-menu');
const navLinks = document.getElementById('navlinks');

if (hamburBtn && navLinks) {
    hamburBtn.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        const icon = hamburBtn.querySelector('i');
        if (navLinks.classList.contains('active')) {
            icon.className = 'ri-close-line';
        } else {
            icon.className = 'ri-menu-line';
        }
    });

    // Close the dropdown when a nav link is clicked
    document.querySelectorAll('#navlinks li a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            const icon = hamburBtn.querySelector('i');
            if (icon) icon.className = 'ri-menu-line';
        });
    });
}