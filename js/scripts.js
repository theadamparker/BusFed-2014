// sticky elements

$(document).ready(function () {
  var top = $('.stick .col-1-3').offset().top - parseFloat($('.stick .col-1-3').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('.stick .col-1-3').addClass('fixed');
    } else {
      // otherwise remove it
      $('.stick .col-1-3').removeClass('fixed');
    }
  });
});