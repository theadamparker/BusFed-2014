// sticky elements

$(document).ready(function () {
  var top = $('.stick').offset().top - parseFloat($('.stick').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('.col-1-3').addClass('fixed');
    } else {
      // otherwise remove it
      $('col-1-3').removeClass('fixed');
    }
  });
});