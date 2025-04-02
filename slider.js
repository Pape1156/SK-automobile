let currentIndex = 0;
const track = document.querySelector('.slider-track');
const slides = document.querySelectorAll('.slider-track img');
const totalSlides = slides.length;

function moveSlide() {
  currentIndex++;

  if (currentIndex >= totalSlides) {
    currentIndex = 0;
  }

  // Applique la translation avec animation fluide
  track.style.transform = `translateX(-${currentIndex * 100}vw)`;
}

// Lancement automatique toutes les 3 secondes
setInterval(moveSlide, 3000);
