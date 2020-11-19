var slideIndex = 0;
carousel();

function carousel(){

    var i;

    var slides = index.html.getElementsByClassName("Image-Slider");

    var dots = index.html.getElementsByClassName("Dots");

    for(i = 0; i < slides.length; ++i){
        slides[i].style.display = "none";
    }

    ++slideIndex;

    if(slideIndex > slides.length){
        slideIndex = 1;
    }

    for(i = 0 ; i < dots.length; ++i){
        
    }
}