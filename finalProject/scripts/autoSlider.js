let slideIndex = 0;
autoSlider();

function autoSlider() {
    let i;
    let slides = document.getElementsByClassName("sukhimg");


    for (i = 0; i < slides.length; i++) {
        console.log(slides[i])
        slides[i].style.display = "none";
    }

    slideIndex = slideIndex + 1;

    if (slideIndex > slides.length) {
        slideIndex = 1;
    };

    slides[slideIndex-1].style.display = "block";

    setTimeout(autoSlider, 3000); 
};