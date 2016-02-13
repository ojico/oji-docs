$(document).ready(function(){
	$('.toggle-zoom').click(function(){
		$('.wf-canvas').toggleClass('zoom-canvas');
	});
	$(document).keypress(function(e) {
  		if(e.which == 27) {
			$('.wf-canvas').removeClass('zoom-canvas');
  		}
	});
});
