
const imageCarousel = document.querySelector(".image-carousel");
const images = document.querySelectorAll(".image-carousel img");

let currentIndex = 0;

function scrollImages() {
    currentIndex = (currentIndex + 1) % images.length;
    const offset = -currentIndex * images[0].clientWidth;
    imageCarousel.style.transform = `translateX(${offset}px)`;
}

const interval = 3000; // Cambia la duración en milisegundos entre desplazamientos
setInterval(scrollImages, interval);



   