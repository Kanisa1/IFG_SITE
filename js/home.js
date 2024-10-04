document.addEventListener('DOMContentLoaded', function() {
    const aboutUs = document.querySelector('.about-us');
    const dropdown = aboutUs.querySelector('.dropdown');

    // Show dropdown on hover
    aboutUs.addEventListener('mouseenter', function() {
        dropdown.style.display = 'block';
    });

    // Hide dropdown when not hovering
    aboutUs.addEventListener('mouseleave', function() {
        dropdown.style.display = 'none';
    });
});