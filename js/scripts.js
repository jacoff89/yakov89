$(window).scroll(function(){
    if ( $(this).scrollTop() > 1 ) {
      $('header').addClass('to-scroll');
    } else {
      $('header').removeClass('to-scroll');
    }
});
$(document).ready(function(){
  var scrolled = window.pageYOffset;
  if(scrolled > 1)
  {
    $('header').addClass('to-scroll');
  }
});

$(".navbar__burger").click(function () {
    $(".navbar__nav").fadeToggle(300);
    $(".navbar__burger").toggleClass('open');
});

$('a.scroll').click(function(){
      var target = $(this).attr('href');
      $('html, body').animate({
          scrollTop: $(target).offset().top - 70}, 1000); //70 замените на любое количество пикселей
      return false;
});


$(window).scroll(function(){
  if ($(this).scrollTop() > 1) {
    $('.to-top').css({top:"100px"});
  } else {
    $('.to-top').css({top:"-100px"});
  }
});
$('.to-top').click(function(){
  $('html, body').animate({scrollTop: '0px'}, 800);
  return false;
});

$(document).ready(function(){
  var scrolled = window.pageYOffset;
  if(scrolled > 1)
  {
    $('.to-top').css({top:"100px"});
  }
});

$('form input[type="checkbox"]').change(function () {
    if ($(this).is(":checked")) {
      $("form button[type='submit']").attr("disabled", false);
    }
    else {
      $("form button[type='submit']").attr("disabled", true);
    }
});
