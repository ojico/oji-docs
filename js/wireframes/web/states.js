$(document).ready(function(){
	$('.toggle-apps').click(function(){
		var focus = $('.zj-wrapper').attr('data-focus');

		if(focus == 'apps') {
			$('.zj-wrapper').attr('data-focus','index');
		} else {
			$('.zj-wrapper').attr('data-focus','apps');
		}
	});

	$('.zj-trip a').click(function(){

		if($(this).parent().hasClass('active')) {
			$(this).parent().removeClass('active');
		} else {
			$('.zj-trip').removeClass('active');
			$(this).parent().addClass('active');
		}
	});

	$('.zj-search').dblclick(function(){
		$('.overlay-search').toggleClass('visible');
	})

	$('.zj-log-group-label').click(function(){
		$(this).toggleClass('open').next('.zj-log-group').toggleClass('visible');
	});
});