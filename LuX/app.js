$(function() {
  $('.menu-toggle').click(function() {
    $('.site-nav').toggleClass('site-nav--open', 500);
    $(this).toggleClass('open');
  });

  $(document).on('click', 'a[href^="#"]', function(event) {
    event.preventDefault();

    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 600);
  });

  let slideIndex = 0;
  slideshow();

  function slideshow() {
    let i;
    let x = document.getElementsByClassName('mySlides');
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > x.length) {
      slideIndex = 1;
    }
    x[slideIndex - 1].style.display = 'block';
    setTimeout(slideshow, 6000);
  }
});
