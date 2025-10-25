// Animate skill bars when they come into view
function animateSkillBars() {
    const skillLevels = document.querySelectorAll('.skill-level');
    
    skillLevels.forEach(skill => {
        const level = skill.getAttribute('data-level');
        skill.style.width = level + '%';
    });
}

// Animate when page loads
document.addEventListener('DOMContentLoaded', animateSkillBars);

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Image gallery functionality
document.querySelectorAll('.thumbnail').forEach(thumb => {
    thumb.addEventListener('click', function() {
        const mainImage = this.closest('.project-image').querySelector('.project-screenshot');
        mainImage.src = this.src;
        mainImage.alt = this.alt;
    });
});