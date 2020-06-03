$(function () {
    //    typing
    var typed = new Typed('.typing', {
        strings: ["Developer.", "Freelancer.", "Designer."],
        typeSpeed: 60,
        backSpeed: 60,
        backDelay: 200,
        startDelay: 200,
        loop: true,
    });

    //    preloader
    $(window).on('load', function (event) {
        $('.preloader').delay(3100).fadeOut(300);
    });




});
