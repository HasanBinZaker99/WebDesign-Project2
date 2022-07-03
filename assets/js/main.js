$(document).ready(function($){
	"use strict";

	//To Initialize the ISO Tope
	$('.project-list').isotope();

	$('.project-titles li').on('click',function(){
		$('.project-titles li').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr('data-filter');
		$('.project-list').isotope({
			filter:selector
		});
	});


}(jQuery));