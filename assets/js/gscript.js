
// -------CAROUSEL CONTROLS -----
// function removeStcikyFooter() {
//     let ww = document.body.clientWidth;
//     let carousel = document.getElementById("carousel");
//     if (ww > 768) {
//         $('footer').removeClass('fixed-bottom');
//     } else if (carousel.style.display === "block" && ww < 768) {
//         $('.footer-img').addClass('fixed-bottom');
//     } else {
//         $('footer').removeClass('fixed-bottom');
//     }
// }

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
// document.querySelectorAll(".image-holder > div > img").forEach(img => img.addEventListener("click", getSrc, false));

// let images = document.querySelectorAll(".carousel-inner > div > img").forEach(img => console.log(img.src);

// for (img of images) {
//     console.log(img.src);
// }

// function getSrc() {
//     alert("Hej");
//     return this.src;
// }

// console.log(image);

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
    // let image = this.src;
    // let srcs = imgFind();
    // for (src of srcs) {
    //     if (src == image) {
    //         alert("Hej");
    //         $('img').parent().addClass("active");
    //     }
    // }
});

// addEventListener("resize", () => {
//     removeStcikyFooter();
// });

$('.carousel-item').on("dblclick", function () {
    closeCarousel();
});

