   $(window).scroll(function() {

    if ($(this).scrollTop()>0)
     {
        $('.close').fadeOut();
     }
    else
     {
      $('.close').fadeIn();
     }
 });