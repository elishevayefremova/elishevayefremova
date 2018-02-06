new WOW().init();

$( document ).ready(function() {
    console.log( "ready!" );
      
	$('body').niceScroll({
		scrollspeed: 5, // scrolling speed
    	mousescrollstep: 20,
	});
	

   //  $('body').mousewheel(function(event) {
   // 		var scrollBottom = $(document).height() - $(window).height() - $(window).scrollTop();

   // 		if ((event.deltaY<0)&&(scrollBottom<=0.75)&&($('section').hasClass('second-unvisible'))) {
   // 			setTimeout(1000);
   //  		new WOW().init();
	  //      $('.first').addClass('first-unvisible');
	  //      $('.second').removeClass('second-unvisible');
	  //      setTimeout(1000);

	  //   }
	  //   if ((event.deltaY>0)&&($('section').hasClass('first-unvisible'))) {
   //  		new WOW().init();
	  //      $('.first').removeClass('first-unvisible');
	  //      $('.second').addClass('second-unvisible');
	  //      setTimeout(100);
	  //   }
  	// });
   
  	 $('.second').click(function(){
  	 	   new WOW().init();
	       $('.first').removeClass('first-unvisible');
	       $('.second').addClass('second-unvisible');
	       setTimeout(100);

  	 });
  	 $('.button').click(function(){
  	 	   new WOW().init();
	       $('.first').addClass('first-unvisible');
	       $('.second').removeClass('second-unvisible');
	       setTimeout(100);

  	 });
    
});