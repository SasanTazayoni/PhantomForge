
// -------CAROUSEL CONTROLS -----

// Bootstrap script for carousel
const myCarouselElement = document.querySelector('#carouselExampleIndicators')
const carousel = new bootstrap.Carousel(myCarouselElement, {
    ride: true,
    interval: 4000,
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


// function to get src of carouse images
function imgFind() {
    var imgs = document.querySelectorAll(".carousel-inner > div > img");
    var imgSrcs = [];
    
    for (var i = 0; i < imgs.length; i++) {
        imgSrcs.push(imgs[i].src);
    }

    return imgSrcs;
}


$('.img-gallery').click(function () {

    activateCarousel();

});


$('.carousel-item').on("dblclick", function () {
    closeCarousel();
});

