$( document ).ready(function() {
  //Remove Offset when screen is below 1146px
  $(window).resize(function() {
    if ($(window).width() < 1146) {
      $('.content-left').removeClass('offset-lg-2');
    } else {
      $('.content-left').addClass('offset-lg-2');
    }
  }).resize();
  //Prevent submit for mailing list form
  $('form').submit(function( event ) {
    $(".form-alert").text( "Sorry, I don't function yet" ).show().fadeOut(500);
    event.preventDefault();
  });
  $('.about-toggle').on('click', function(){
    $('.slider').toggleClass('close');
    $('body').toggleClass('overflow-control');
    $('.main-content-container').toggleClass('hidden');
  });
});
