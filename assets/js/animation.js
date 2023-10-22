console.log("Hello Animation");
document.addEventListener("DOMContentLoaded", function () {
    
    let check = 0;
    // flying witch
    $('#switch').on('mouseover', function () {
        if (check === 0) {
            $('#witch-box').css('display', 'block');
            let start = Date.now();

            let timer = setInterval(function () {
                let timePassed = Date.now() - start;

                witch.style.left = timePassed / 5 + 'px';

                if (timePassed > 8000) clearInterval(timer);
            }, 20);
            setTimeout(function () {
                $('#witch-box').css('display', 'none');
            }, 8000);

            check += 1;
        }
    });

    // next animation here
});