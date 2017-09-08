$(window).scroll(function() {
    // reduced header when scrolling
	if ($(document).scrollTop() > 120) {
		$('body > header').addClass('scrolled');
	} else {
		$('body > header').removeClass('scrolled');
	}

    // activation of progress bars animation
    $(".progress-bar").each(function(index, el) {
        el = $(el);
        if (el.offset().top <= $(document).scrollTop() + window.innerHeight) {
            el.css("width", el.attr("aria-valuenow") + "%");
        } else {
            el.css("width", 0);
        }
    });
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

// animated progress bars
$(document).ready(function() {
    $(".progress-bar").css("width", 0);
});