const data = [
  { id: 1, url: 'https://picsum.photos/800/400?random=1', alt: 'Image 1', tagline: 'hello world' },
  { id: 2, url: 'https://picsum.photos/800/400?random=2', alt: 'Image 2', tagline: 'Tagline for Image 2' },
  { id: 3, url: 'https://picsum.photos/800/400?random=3', alt: 'Image 3', tagline: 'Tagline for Image 3' },
  { id: 4, url: 'https://picsum.photos/800/400?random=4', alt: 'Image 4', tagline: 'Tagline for Image 4' },
  { id: 5, url: 'https://picsum.photos/800/400?random=5', alt: 'Image 5', tagline: 'Tagline for Image 5' },
];

const carouselItemsContainer = document.getElementById('carousel-items');
const indicatorsContainer = document.getElementById('carousel-indicators');
const prevBtn = document.getElementById('prev-btn');
const nextBtn = document.getElementById('next-btn');

let currentIndex = 0;

// Crée les items et les indicateurs du carrousel
data.forEach((item, index) => {
  const carouselItem = document.createElement('div');
  carouselItem.classList.add('carousel-item');
  carouselItem.innerHTML = `
    <img src="${item.url}" alt="${item.alt}">
    <p class="tagline">${item.tagline}</p>
  `;
  carouselItemsContainer.appendChild(carouselItem);

  const indicator = document.createElement('div');
  indicator.classList.add('indicator');
  if (index === 0) indicator.classList.add('active');
  indicatorsContainer.appendChild(indicator);

  // Ajoute l'événement pour naviguer vers une image spécifique
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

// Met à jour la position du carrousel
function updateCarousel() {
  const carouselWidth = document.querySelector('.carousel-container').offsetWidth;
  const offset = -currentIndex * carouselWidth;
  carouselItemsContainer.style.transform = `translateX(${offset}px)`;

  // Met à jour les indicateurs
  document.querySelectorAll('.indicator').forEach((indicator, index) => {
    indicator.classList.toggle('active', index === currentIndex);
  });
}

// Ajoute les événements des boutons
prevBtn.addEventListener('click', () => {
  currentIndex = (currentIndex - 1 + data.length) % data.length;
  updateCarousel();
});

nextBtn.addEventListener('click', () => {
  currentIndex = (currentIndex + 1) % data.length;
  updateCarousel();
});

// Mise à jour initiale
updateCarousel();
