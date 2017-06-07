
//Remove Offset when screen is below 1146px
$(window).resize(function() {
    if ($(window).width() < 1146) {
        $('.content-left').removeClass('offset-lg-2');
    } else {
        $('.content-left').addClass('offset-lg-2');
    }
}).resize();
