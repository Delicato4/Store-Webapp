let currentSlideIndex = 1;
const slides = document.querySelector('.slider');
const dots = document.querySelectorAll('.dot');
const totalSlides = document.querySelectorAll('.slide').length;

function moveSlide(direction) {
    currentSlideIndex += direction;
    
    if (currentSlideIndex > totalSlides) {
        currentSlideIndex = 1;
    }
    if (currentSlideIndex < 1) {
        currentSlideIndex = totalSlides;
    }
    document.addEventListener("DOMContentLoaded", function () 
    {
    updateSlider();
});

    updateSlider();
}

function currentSlide(n) {
    currentSlideIndex = n;
    updateSlider();
}

function updateSlider() {
    slides.style.transform = `translateX(-${(currentSlideIndex - 1) * 100}%)`;
    
    // Update dots
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index + 1 === currentSlideIndex);
    });
}

// Auto-advance slides every 5 seconds
setInterval(() => moveSlide(1), 5000);

// Initialize slider
updateSlider();

// Set the countdown date (30 days from now)
const countdownDate = new Date();
countdownDate.setDate(countdownDate.getDate() + 30);

function updateCountdown() {
    const now = new Date().getTime();
    const distance = countdownDate.getTime() - now;

    // Calculate time units
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    // Add leading zeros
    const formatNumber = (number) => number.toString().padStart(2, '0');

    // Update the display
    document.getElementById('days').textContent = formatNumber(days);
    document.getElementById('hours').textContent = formatNumber(hours);
    document.getElementById('minutes').textContent = formatNumber(minutes);
    document.getElementById('seconds').textContent = formatNumber(seconds);

    // If countdown is finished
    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById('days').textContent = '00';
        document.getElementById('hours').textContent = '00';
        document.getElementById('minutes').textContent = '00';
        document.getElementById('seconds').textContent = '00';
    }
}

// Update countdown every second
const countdownInterval = setInterval(updateCountdown, 1000);

// Initial call
updateCountdown();
