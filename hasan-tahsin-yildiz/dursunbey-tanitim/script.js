const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showSlide(index) {
  const slider = document.getElementById('slider');
  slider.style.transform = `translateX(-${index * 100}%)`;
  currentIndex = index;
}

function nextSlide() {
  const next = (currentIndex + 1) % slides.length;
  showSlide(next);
}

function prevSlide() {
  const prev = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(prev);
}

// Otomatik geçiş
setInterval(nextSlide, 4000);