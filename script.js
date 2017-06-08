$(document).ready(function() {
    //Remove Offset when screen is below 1146px
    $(window).resize(function() {
        if ($(window).width() < 1146) {
            $('.content-left').removeClass('offset-lg-2');
        } else {
            $('.content-left').addClass('offset-lg-2');
        }
    }).resize();
    //Prevent submit for mailing list form
    $('form').submit(function(event) {
        event.preventDefault();
        $('.form-alert').text('Thanks for signing up!');
        $('input[type=text], textarea').val('');
    });
    //Toggle Slider Function
    $('.about-toggle').on('click', function() {
        $('.slider').toggleClass('close');
        $('.main-content-container').toggleClass('hidden');
    });
});
