$(document).ready(function() {
	$('.menu-toggler').on('click', function() {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
		$('.social-nav-list').toggleClass('animation');
		

	});

	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});

	$('nav a[href*="#"]').on('click', function() {
		$('html, body').animate({
			scrollTop:$($(this).attr('href')).offset().top - 100},2000);

	});
    
    $('#up').click(function (){
		$('body,html').animate({scrollTop:'0'},5000);
	});


	AOS.init({
        easing:'ease',
        duration:1800,
        once:true
    });
});

