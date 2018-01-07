(function($){
    $(document).ready(function () {
		var menu = $('.menu');
			items = $('.menu li');

		$(menu).on('click', function(e){
			e.preventDefault();
			items.slideToggle();
		});


		$('.items').slick({
			  infinite: true,
			  speed: 300,
			  slidesToShow: 5,
			  slidesToScroll: 1,
			  arrows: true,
			  responsive: [
			    {
			      breakpoint: 900,
			      settings: {
			        slidesToShow: 3,
			        slidesToScroll: 1,
			        infinite: true,
			      }
			    },
			    {
			      breakpoint: 500,
			      settings: {
			        slidesToShow: 1,
			        slidesToScroll: 1,
			        arrows: false,
			      }
			    },
			  ],

			});
    });


})(jQuery);