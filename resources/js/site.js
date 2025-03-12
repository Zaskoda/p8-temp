import Alpine from 'alpinejs';
import Glide from '@glidejs/glide';
import '@glidejs/glide/dist/css/glide.core.min.css';
import * as Iconify from '@iconify/iconify';


// Ensure Iconify initializes
window.Iconify = Iconify;

window.Alpine = Alpine;
Alpine.start();

window.addEventListener('DOMContentLoaded', () => {
    if (document.querySelector('.glide')) {
        new Glide('.glide', {
            type: 'carousel', // Type of glide (carousel or slider)
            startAt: 0, // Slide to start at
            perView: 1, // Number of slides visible at once
            autoplay: 5000, // Autoplay with a delay (in milliseconds)
            animationDuration: 800, // Transition duration (in ms)
            animationTimingFunc: 'ease', // Easing function for animations
            breakpoints: {
                768: { perView: 1 },
                1024: { perView: 2 }
            }
        }).mount();
    }
});