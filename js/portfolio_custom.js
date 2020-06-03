$(function () {

    //    mixitup js
    var mixer = mixitup('.mixitup_gal');

    //    venobox
    $('.venobox').venobox({
        framewidth: '400px',
        frameheight: '450px',
        spinner: 'cube-grid',
        spinColor: '#28B8D8'
    });

    //mixitup_btn active bar
    $('.mixitup_btn').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
    });
});
