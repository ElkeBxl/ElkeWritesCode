// reduced header when scrolling
$(window).scroll(function() {
	if ($(document).scrollTop() > 120) {
		$('body > header').addClass('scrolled');
	} else {
		$('body > header').removeClass('scrolled');
	}
});

// smooth scrolling for # links
$(document).on('click', 'a[href^="#"]', function(e) {
    var element = $($(this).attr('href'));
    if (element.length === 0) {
        return;
    }
    e.preventDefault();
    var pos = element.offset().top;
    $('body, html').animate({scrollTop: element.offset().top});
});