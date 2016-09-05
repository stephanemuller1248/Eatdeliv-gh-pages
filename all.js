
$(document).ready(function(){

  $(function() {
    $('a[href*="#"]:not([href="#"])').click(function() {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = $(this.hash);
        target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
        if (target.length) {
          $('html, body').animate({
            scrollTop: target.offset().top
          }, 1000);
          return false;
        }
      }
    });
  });

  $('.circle').hover(function() {
        $(this).animate({ 'zoom': 1.5 }, 400);
    },
    function() {
        $(this).animate({ 'zoom': 1 }, 200);
  });



});

// JavaScript
window.sr = ScrollReveal();
sr.reveal('.teaser');
