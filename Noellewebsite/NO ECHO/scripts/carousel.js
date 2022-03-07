$('.next-arrow').click(function(){
    var currentSlide = $('.active-slide'),
    nextSlide = currentSlide.next(),
    currentDot= $('.active-dot'),
    nextDot= currentDot.next();

    if (nextSlide.length === 0){
        nextSlide = $('.slide').first();
        nextDot = $('.dot').first();
    }

    currentSlide.fadeOut(500).removeClass('active-slide');
    nextSlide.fadeIn(500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    nextDot.addClass('active-dot');
});

$('.prev-arrow').click(function(){
    var currentSlide = $('.active-slide'),
    prevSlide = currentSlide.prev(),
    currentDot= $('.active-dot'),
    prevDot = currentDot.prev();

    if (prevSlide.length === 0){
        prevSlide = $('.slide').last();
        prevDot = $('.dot').last();
    }

    currentSlide.fadeOut(500).removeClass('active-slide');
    prevSlide.fadeIn(500).addClass('active-slide');

    currentDot.removeClass('active-dot');
    prevDot.addClass('active-dot');
})

$(window).on('load resize', function() {
    var x = $('.active-slide img').height() + "px";
  
    $('.slider').css('min-height', x);
    $('p').text(x);
  });
  
  $('section').each(function() {
    var a = $('.slide').length;
    for (i = 0; i < a; i++) {
      $('.slider-dots').append('<li class="dot">&bull;</li>');
    }
  });
  
  $('.slider div:first').addClass('active-slide');
  $('.slider-dots li:first').addClass('active-dot');