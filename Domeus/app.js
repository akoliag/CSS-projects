$(function () {
    $('.menu-toggle').click(function () {
        $('.site-nav').toggleClass('site-nav--open', 500);
        $(this).toggleClass('open');
    });
});

$(document).on('click', 'a[href^="#"]', function(event) {
  event.preventDefault();

  $('html, body').animate({
    scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});
