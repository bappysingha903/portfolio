$(function () {
    //    skills
    $('.skill_per').each(function () {
        var $this = $(this);
        var per = $this.attr('per');
        $this.css("width", per + '%');
        $({
            animatedValue: 0
        }).animate({
            animatedValue: per
        }, {
            duration: 3000,
            step: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            },
            complete: function () {
                $this.attr('per', Math.floor(this.animatedValue) + '%');
            }
        });
    });

    //    venobox
    $('.venobox_two').venobox({
        framewidth: '450px',
        frameheight: '350px',
        spinner: 'cube-grid',
        spinColor: '#28B8D8'
    });


});
