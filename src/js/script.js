const menuToggle = document.getElementById('menuToggle');
const menuClose = document.getElementById('menuClose');
const menuOverlay = document.getElementById('menuOverlay');

// Ouvrir le menu
menuToggle.addEventListener('click', () => {
    menuOverlay.classList.add('active');
    document.body.style.overflow = 'hidden';
});

// Fermer le menu
menuClose.addEventListener('click', () => {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
});

// Fermer en cliquant en dehors du menu
menuOverlay.addEventListener('click', (e) => {
    if (e.target === menuOverlay) {
    menuOverlay.classList.remove('active');
    document.body.style.overflow = 'auto';
    }
});