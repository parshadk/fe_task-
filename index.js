
// Animated text
const animatedText = document.getElementById('animated-text');
const text = "A Modern Retelling of Ancient Myths";
let index = 0;

function typeText() {
    if (index < text.length) {
        animatedText.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

// Mobile menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Carousel
const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const nextButton = document.querySelector('.carousel-button-next');
const prevButton = document.querySelector('.carousel-button-prev');
let currentIndex = 0;

function  moveToSlide(index) {
    track.style.transform = `translateX(-${index * 100}%)`;
    currentIndex = index;
}

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
});

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + slides.length) % slides.length;
    moveToSlide(currentIndex);
});

// Auto-advance carousel
setInterval(() => {
    currentIndex = (currentIndex + 1) % slides.length;
    moveToSlide(currentIndex);
}, 5000);

// Lazy loading images
const images = document.querySelectorAll('img');
const options = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const imageObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.src; // This will trigger the image load
            imageObserver.unobserve(img);
        }
    });
}, options);

images.forEach(img => {
    imageObserver.observe(img);
});
