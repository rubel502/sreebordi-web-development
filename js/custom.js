$(document).ready(function(){
			$('#drop').click(function(){
				$('.navbar ul').slideToggle();
			});
		});
		
//ScrreenTop for menu
function scrollNav() {
  $('.navbar a').click(function(){
    $(".active").removeClass("active");     
    $(this).addClass("active");
    
    $('html, body').stop().animate({
      scrollTop: $($(this).attr('href')).offset().top - 160
    }, 400);
    return false;
  });
}
scrollNav();

//accordion js work
  $( function() {
    $( "#accordion" ).accordion();
  } );


//team carousel work
  $('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:true,
    autoplay: true,
    autoplayTimeout: 1000,
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        767:{
            items:2
        },
        1000:{
            items:4
        }
    }
})

//bottom to top
$(document).ready(function(){
  $('.top-iocn a').click(function(){
    $('html, body').animate({'scrollTop' : '0'}, 2000);
    return false;
  });

  $(window).scroll(function(){
    if($(window).scrollTop() > 300){
      $('.top-iocn').fadeIn();

    }
    else{
      $('.top-iocn').fadeOut();

    }
  });
});