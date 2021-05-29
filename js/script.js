// // header > nav
// // ==================================================
$(function(){
  $('#js-buttonHamburger').click(function () {
    $('body').toggleClass('is-drawerActive');
    $('#js-buttonHamburger').children(".p-hamburger__line").toggleClass('nav-hovered');

    $('#nav').toggleClass('slide-in');
    $('#nav').slideToggle(300);
    

    if ($(this).attr('aria-expanded') == 'false') {
        $(this).attr('aria-expanded', true);
    } else {
        $(this).attr('aria-expanded', false);
    }

  });

  $('#js-buttonHamburger').hover(function () {
    if($('body').hasClass('is-drawerActive')) {
      $(this).children(".p-hamburger__line").removeClass('nav-hovered');
    } else {
      $(this).children(".p-hamburger__line").addClass('nav-hovered');
    }
  }, function() {
    if($(this).children(".p-hamburger__line").hasClass('nav-hovered')) {
      $(this).children(".p-hamburger__line").removeClass('nav-hovered');
    }
  });
  
  $('a[href^="#"]').click(function(){
    $('body').toggleClass('is-drawerActive');
    $('#js-buttonHamburger').children(".p-hamburger__line").toggleClass('nav-hovered');

    $('#nav').toggleClass('slide-in');
    $('#nav').slideToggle(300);

    if ($('#js-buttonHamburger').attr('aria-expanded') == 'false') {
      $('#js-buttonHamburger').attr('aria-expanded', true);
    } else {
        $('#js-buttonHamburger').attr('aria-expanded', false);
    }

    if($('body').hasClass('is-drawerActive')) {
      $('#js-buttonHamburger').children(".p-hamburger__line").removeClass('nav-hovered');
    } else {
      $('#js-buttonHamburger').children(".p-hamburger__line").addClass('nav-hovered');
    }

    if($('#js-buttonHamburger').children(".p-hamburger__line").hasClass('nav-hovered')) {
      $('#js-buttonHamburger').children(".p-hamburger__line").removeClass('nav-hovered');
    }

    var speed = 500;
    var href= $(this).attr("href");
    var target = $(href == "#" || href == "" ? 'html' : href);
    var position = target.offset().top;
    $("html, body").animate({scrollTop:position}, speed, "swing");
    return false;
  });

});


// // animation / aos.js
// // ==================================================
$(function(){
    AOS.init({
      once: true,
    });
});