
// -------CAROUSEL CONTROLS -----
function removeStcikyFooter() {
    let ww = document.body.clientWidth;
    let carousel = document.getElementById("carousel");
    if (ww > 768) {
        $('footer').removeClass('fixed-bottom');
    } else if (carousel.style.display === "block" && ww < 768) {
        $('.footer-img').addClass('fixed-bottom');
    } else {
        $('footer').removeClass('fixed-bottom');
    }
}

// Bootstrap script for carousel
const myCarouselElement = document.querySelector('#carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    ride: true,
    interval: 2000,
    wrap: true
})
// Function to swtich on carousel
function activateCarousel() {
    let ww = document.body.clientWidth;
    $('#img-grid').css('display', 'none');
    $('#carousel').css('display', 'block');
    if (ww < 768) {
        $('.footer-img').addClass('fixed-bottom');
    }
}

// Function to switch off carousel
function closeCarousel() {
    $('#img-grid').css('display', 'block');
    $('#carousel').css('display', 'none');
}

// ----EVENT LISTENERS
$('#switch').click(function () {
    let carousel = document.getElementById("carousel");
    if (carousel.style.display === "block") {
        closeCarousel();
    } else {
        activateCarousel();
    }
});

$('.img-gallery').click(function () {
    activateCarousel();
});

addEventListener("resize", () => {
    removeStcikyFooter();
});

$('.carousel-item').on("dblclick", function () {
    closeCarousel();
});

