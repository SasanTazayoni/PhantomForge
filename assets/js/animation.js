document.addEventListener("DOMContentLoaded", function () {

    skeletonsAnime();
    setInterval(function () {
        lurking();
    }, 12000);
});

function skeletonsAnime() {

    let ww = document.body.clientWidth;
    if (ww > 768) {
        $('#skeleton-box').css('display', 'block');

        setTimeout(function () {
            $('#skeleton-box').css('display', 'none');
        }, 4000);

        setTimeout(function () {
            $('#skeleton-box-two').css('display', 'block');
        }, 8000);

        setTimeout(function () {
            $('#skeleton-box-two').css('display', 'none');
        }, 12000);
    }
}

function lurking() {

    let ww = document.body.clientWidth;
    if (ww > 348) {
        $('#lurking-box').css('display', 'block');

        setTimeout(function () {
            $('#lurking-box').css('display', 'none');
        }, 4000);
    }
}
