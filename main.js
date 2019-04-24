var modal = document.getElementById('modal');

// performs progressbar
function move() {
    var element = document.getElementById('bar');
    var width = 1;
    // FIXED: edit interval 5 -> 500
    var id = setInterval(frame, 5);

    function frame() {
        if (width >= 100) {
            clearInterval(id);
            hideModal();
        }
        else {
            width++;
            element.style.width = width + '%';
            document.getElementById('label').innerHTML = width*1 + '%';
        }
    }
}

function hideModal() {
    modal.style.display = 'none';
}

// slider
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex =n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slider__mySlides");
    var dots = document.getElementsByClassName("button__dot");

    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length;
    }
    for(i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace("active", " ");
    }
    slides[slideIndex-1].style.display = 'block';
    dots[slideIndex-1].className += ' active';
}