
// -------CAROUSEL CONTROLS -----
function removeStcikyFooter() {
    let ww = document.body.clientWidth;
    let showcase = document.getElementById("carousel");
    if (ww > 768) {
        $('footer').removeClass('fixed-bottom');
    } else if (showcase.style.display === "block" && ww < 768) {
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

// ----EVENT LISTENERS
$('#switch').click(function () {
    activateCarousel();
});

$('.img-gallery').click(function () {
    activateCarousel()
})

addEventListener("resize", () => {
    console.log("works");
    removeStcikyFooter();
});



