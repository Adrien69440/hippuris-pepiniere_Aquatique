const data = [
  { id: 1, url: 'https://picsum.photos/800/400?random=1', alt: 'Image 1', tagline: 'hello world' },
  { id: 2, url: 'https://picsum.photos/800/400?random=2', alt: 'Image 2', tagline: 'Tagline for Image 2' },
  { id: 3, url: 'https://picsum.photos/800/400?random=3', alt: 'Image 3', tagline: 'Tagline for Image 3' },
  { id: 4, url: 'https://picsum.photos/800/400?random=4', alt: 'Image 4', tagline: 'Tagline for Image 4' },
  { id: 5, url: 'https://picsum.photos/800/400?random=5', alt: 'Image 5', tagline: 'Tagline for Image 5' }
];

// Sélecteurs
const carouselImage = document.getElementById('carousel-image');
const carouselTagline = document.getElementById('carousel-tagline');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');
const dotsContainer = document.getElementById('dots-container');

let currentIndex = 0;

// Créer les dot indicators
function createDots() {
  for (let i = 0; i < data.length; i++) {
    const dot = document.createElement('div');
    dot.classList.add('dot');
    // si besoin de style initial, ou écouteur de clic
    dot.addEventListener('click', () => {
      currentIndex = i;
      updateSlide();
    });
    dotsContainer.appendChild(dot);
  }
}

// Mettre à jour l'affichage
function updateSlide() {
  carouselImage.src = data[currentIndex].url;
  carouselImage.alt = data[currentIndex].alt;
  carouselTagline.textContent = data[currentIndex].tagline;
  
  // Gérer l'état actif des dots
  const allDots = dotsContainer.querySelectorAll('.dot');
  allDots.forEach((dot, idx) => {
    dot.classList.toggle('active', idx === currentIndex);
  });
}

// Navigation
nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % data.length;
  updateSlide();
});

prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  updateSlide();
});

// Initialisation
createDots();
updateSlide();
