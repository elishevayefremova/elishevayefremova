$(document).ready(function() {

	$(window).on('load', function() {
					
					
			$(document).ready(function(){
  				$('.owl-carousel').owlCarousel({
					    loop: true,
					    autoplay: true,
					    margin:30,
					    dots: false,
					    responsive:{
					        0:{
					            items:1
					        },
					        600:{
					            items:3,
					            stagePadding: 10
					        },
					        1000:{
					        	items:4,
					        	stagePadding: 20
					        },
					        1200:{
					            items:4
					        }
					    }
					});


			});

		});

	});
