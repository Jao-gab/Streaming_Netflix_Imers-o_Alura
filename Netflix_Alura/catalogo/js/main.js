import { categories } from './data.js';
import { createCarousel } from './components/Carousel.js';

document.addEventListener('DOMContentLoaded', () => {
    const params = new URLSearchParams(window.location.search);
    const nomeQuery = params.get('name');
    const imagemQuery = params.get('avatar');

    if (nomeQuery && imagemQuery) {
        localStorage.setItem('perfilAtivoNome', nomeQuery);
        localStorage.setItem('perfilAtivoImagem', imagemQuery);
    }

    const nomePerfil = nomeQuery || localStorage.getItem('perfilAtivoNome');
    const imagemPerfil = imagemQuery || localStorage.getItem('perfilAtivoImagem');

    if (nomePerfil && imagemPerfil) {
        const kidsLink = document.querySelector('.kids-link');
        const profileIcon = document.querySelector('.profile-icon');

        if (kidsLink) kidsLink.textContent = nomePerfil;
        if (profileIcon) profileIcon.src = imagemPerfil;
    }

    const container = document.getElementById('main-content');

    if (container) {
        categories.forEach(category => {
            const carousel = createCarousel(category);
            container.appendChild(carousel);
        });
    }
});
