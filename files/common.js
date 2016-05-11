 
	var $page_width=$(window).width();
	var supportsOrientationChange = "onorientationchange" in window,
	orientationEvent = supportsOrientationChange ? "orientationchange" : "resize";

	$(function(){
		$(window).resize(function(){resize();});
		$(window).bind(orientationEvent, function() {resize();});
		$("#main_nav li").hover(function(){
			$(this).find(".menu").slideDown(100);
		},function(){$(this).find(".menu").slideUp(100);});
		resize();
	});
	function resize(){
		$page_width=$(window).width();
		reposition();
	}
	
	$(window).load(function() {	
		loadedCall();
	});
	
