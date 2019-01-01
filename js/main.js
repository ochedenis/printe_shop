function main() {
	$('.phones').hide();
	$('.groupOff').hide();
	$('.footer-phones').hide();
	$('.footer-phonesOff').hide();

	$(window).scroll(function() {
		if($(this).scrollTop() != 0) {
			$('#callMe').fadeIn();
		} else {
			$('#callMe').fadeOut();
		}
	});

	$('#callMe').on('click', function() {
		$('#call-background').toggle();
	});

	$('.hide-form').on('click', function() {
		$('#call-background').hide();
	});

	$('.groupOn').on('click', function() {
		$('.phones').slideToggle(200);
	});

	$('.groupOn').on('click', function() {
		$('.groupOff').toggle();
	});

	$('.groupOff').on('click', function() {
		$('.phones').slideToggle(200);
		$('.groupOff').hide();
	});

	$('.footer-phonesOn').on('click', function() {
		$('.footer-phones').slideToggle(200);
	});

	$('.footer-phonesOn').on('click', function() {
		$('.footer-phonesOff').toggle();
	});

	$('.footer-phonesOff').on('click', function() {
		$('.footer-phones').slideToggle(200);
		$('.footer-phonesOff').hide();
	});

	$('.hideMenu__icon').on('click', function() {
		$('.hideMenu__list').slideToggle(500);
		$('.openedMenu').toggle();
		$('.closedMenu').toggle();
	});

};

$(document).ready(main);
