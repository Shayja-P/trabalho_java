var navbarvertical = document.getElementById("navt");

navbarvertical.style.height = '0%';
function toggle() {
    if (navbarvertical.style.height == '0%') {
        navbarvertical.style.height = '50%';
    } else {
        navbarvertical.style.height = '0%';
    }
}

const sliders = document.querySelectorAll('.slider-container');

sliders.forEach(sliderContainer => {
    const prevButton = sliderContainer.querySelector('.slider-prev');
    const nextButton = sliderContainer.querySelector('.slider-next');
    const slider = sliderContainer.querySelector('.book-slider');
    const slides = slider.querySelectorAll('.book-slide');
    const totalSlides = slides.length;
    let index = 0;

    const slideWidth = slides[0].offsetWidth + 20;

    function moveSlider(direction) {
        index += direction;

        if (index < 0) {
            index = totalSlides - 1;
        } else if (index >= totalSlides) {
            index = 0;
        }

        // Move o slider
        slider.style.transform = `translateX(-${index * slideWidth}px)`;
    }

    // Adiciona eventos para os botões do slider
    prevButton.addEventListener('click', () => moveSlider(-1));
    nextButton.addEventListener('click', () => moveSlider(1));
});

