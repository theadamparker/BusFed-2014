// sticky elements

$(document).ready(function () {
  var top = $('#comment').offset().top - parseFloat($('#comment').css('marginTop').replace(/auto/, 0));
  $(window).scroll(function (event) {
    // what the y position of the scroll is
    var y = $(this).scrollTop();

    // whether that's below the form
    if (y >= top) {
      // if so, ad the fixed class
      $('#comment').addClass('fixed');
    } else {
      // otherwise remove it
      $('#comment').removeClass('fixed');
    }
  });
});