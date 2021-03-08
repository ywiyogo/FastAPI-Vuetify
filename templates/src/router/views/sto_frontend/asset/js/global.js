var app = {
	init: function() {
		app.homeSlider();
		app.aosEffect();
		app.headerScroll();
		app.tesimonialSlider();
	},

	homeSlider: function(){

	},

	aosEffect: function(){
		AOS.init({
			once: false
		});
	},

	headerScroll: function(){
		$(document).ready(function() {
			$(document).scroll(function() {
				var y = $(this).scrollTop();
				if (y > 20) {
					$( "body .navbar" ).addClass('changeups');
				} else {
					$( "body .navbar").removeClass('changeups');
				}
			});
		});
	},

	tesimonialSlider: function(){
		$(".owl-carousel").owlCarousel({
			center: true,
			loop: true,
			margin: 30,
			items: 2,
			responsive: {
				600: {
					items: 3
				}
			}
		});
	}

};

jQuery(document).ready(function($){
	app.init();
})
