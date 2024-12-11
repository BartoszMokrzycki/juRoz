$(document).ready(function () {
	$('.opinions__boxes').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		autoplay: false,
		autoplaySpeed: 2500,
		arrows: false,
		mobileFirst: true,
		responsive: [
			{
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				},
			},
		],
	});

	// Nadpisanie touchstart jako passive
	$('.opinions__boxes').on('touchstart', function (e) {
		e.preventDefault = false;
	});
});
