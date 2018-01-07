(function($){
    $(document).ready(function () {
		var menu = $('.menu');
			items = $('.menu li');

		$(menu).on('click', function(e){
			e.preventDefault();
			items.slideToggle();
		});
    })
})(jQuery);
