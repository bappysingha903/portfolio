$(function () {
    //preloader
    $(window).on('load', function (event) {
        $('.preloadertwo').delay(800).fadeOut(300);
    });
    //    navbar
    $('.navbar-toggler').on('click', function () {
        $(this).toggleClass('active');
    });

    //    sticky menu
    $(window).on('scroll', function (event) {
        var scroll = $(window).scrollTop();
        if (scroll < 500) {
            $('.sticky-top').removeClass('sticky');
        } else {
            $('.sticky-top').addClass('sticky');
        }
    });

    //    BACK TO TOP BUTTON
    $(window).on('scroll', function (event) {
        if ($(this).scrollTop() > 1000) {
            $('.back_to_top').fadeIn(200)
        } else {
            $('.back_to_top').fadeOut(200)
        }
    });
    $('.back_to_top').on('click', function (event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: 0,
        }, 1000);
    });
});
