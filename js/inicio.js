// Incluir el código JavaScript anterior, y además...

// Obtener todos los slideshows
var slideshows = document.querySelectorAll('.slideshow-container');

// Para cada slideshow, ejecutar showSlides()
slideshows.forEach(function(slideshow) {
    var slideIndex = 0;
    showSlides();

    function showSlides() {
        var slides = slideshow.getElementsByClassName("mySlides");
        for (var i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        slideIndex++;
        if (slideIndex > slides.length) {
            slideIndex = 1;
        }
        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 2000); // Cambia la imagen cada 2 segundos (2000 milisegundos)
    }
});