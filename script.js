let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');

window.addEventListener('scroll', () => {
    let value = window.scrollY;

    text.style.marginTop = value * 1.1 + 'px';
    leaf.style.top = value * -1.1 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * -.2 + 'px';

})

var swiper = new Swiper(".mySwiper", {
    slidePerView: 1,
    centeredSlides: true,
    loop: true,
    spaceBetween: 30,
    grabCursor: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },
    breakpoints: {
        991: {
            slidesPerView: 3
        }
    }

});



const video = document.querySelector('iframe');
const storyHeading = document.getElementById('storyHeading');

// Cuando el vídeo se reproduce
video.addEventListener('play', () => {
    // Ocultar el h2 después de 5 segundos
    setTimeout(() => {
        storyHeading.style.display = 'none';
    }, 5000);

    // Mostrar el h2 faltando 10 minutos para que finalice el vídeo
    const videoDuration = video.duration;
    const tenMinutesBeforeEnd = videoDuration - 600;

    setTimeout(() => {
        storyHeading.style.display = 'block';
    }, tenMinutesBeforeEnd * 1000);
});




