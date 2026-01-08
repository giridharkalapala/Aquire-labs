(function () {
    const slider = document.querySelector(".banner-slider");
    if (!slider) return;

    const slides = slider.querySelectorAll(".slide");
    const nextBtn = slider.querySelector(".next");
    const prevBtn = slider.querySelector(".prev");
    const dotsContainer = slider.querySelector(".slider-dots");

    if (slides.length === 0) return;

    let current = 0;
    let autoPlay;

    // Create dots
    slides.forEach((_, index) => {
        const dot = document.createElement("span");
        if (index === 0) dot.classList.add("active");
        dot.addEventListener("click", () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = dotsContainer.querySelectorAll("span");

    function updateSlides() {
        slides.forEach((slide, index) => {
            slide.classList.remove("active");
            dots[index].classList.remove("active");
        });

        slides[current].classList.add("active");
        dots[current].classList.add("active");
    }

    function goToSlide(index) {
        current = index;
        updateSlides();
        resetAutoPlay();
    }

    function nextSlide() {
        current = (current + 1) % slides.length;
        updateSlides();
    }

    function prevSlide() {
        current = (current - 1 + slides.length) % slides.length;
        updateSlides();
    }

    function startAutoPlay() {
        autoPlay = setInterval(nextSlide, 5000);
    }

    function resetAutoPlay() {
        clearInterval(autoPlay);
        startAutoPlay();
    }

    nextBtn.addEventListener("click", () => {
        nextSlide();
        resetAutoPlay();
    });

    prevBtn.addEventListener("click", () => {
        prevSlide();
        resetAutoPlay();
    });

    // Init
    slides[0].classList.add("active");
    startAutoPlay();
})();
