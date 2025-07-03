async function loadSlider() {
    try {
        const slider = document.getElementById('slider');
        const reponse = await fetch('/components/slider/slider.html');

        if (!reponse.ok) {
            throw new Error('Erreur lors du chargement du slider');
        }

        const html = await reponse.text();
        slider.innerHTML = html;

        slideIndex = 1;
        showSlides(slideIndex);

    } catch (erreur) {
        console.error('Erreur :', erreur);
    }
}
loadSlider();

let slideIndex;

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("demo");
    let captionText = document.getElementById("caption");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
    captionText.innerHTML = dots[slideIndex - 1].alt;
}