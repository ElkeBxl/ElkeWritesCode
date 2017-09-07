$(window).scroll(function() {
	if ($(document).scrollTop() > 120) {
		$('body > header').addClass('scrolled');
	} else {
		$('body > header').removeClass('scrolled');
	}
});