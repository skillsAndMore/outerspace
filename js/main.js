// Smooth Scroll ad ogni ancora interna della pagina

$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var hyperlink = $(this.hash);
      hyperlink = hyperlink.length ? hyperlink : $('[name=' + this.hash.slice(1) +']');
      if (hyperlink.length) {
        $('html,body').animate({
          scrollTop: hyperlink.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Fade in e Fade out per il pulsante to-top

$(document).ready(function(){ 

   $(window).scroll(function(){
       if ($(this).scrollTop() > 250) {
           $('.to-top').fadeIn();
       } 
       else {
           $('.to-top').fadeOut();
       }
}); 
$('.to-top').click(function(){
       $("html, body").animate({ scrollTop: 0 }, 800);
       return false;
       });
});