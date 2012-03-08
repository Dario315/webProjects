/*
Image Dropper by Brady Sammomns
Copyright 2012
www.bradysammons.com
*/
$(function(){
		function imgDrop(){
		$('.img-list img').each(function(){
			var width = $(this).width();
			var height = $(this).height();
			
			$(this).css('width' , width);
			$(this).css('height' , height);
			$(this).parent().css('width' , width);
			$(this).parent().css('height' , height);
			$(this).next().css('width' , width-16);
			$(this).next().css('height' , height-16).css('top' , -height);
			
			$(this).parent().hover(function(){
				//on RollOver
				$(this).find('p').stop().animate({'top' : 0}, 300);	
			},function(){
				//on RollOut
				$(this).find('p').stop().animate({'top' : -height}, 600);
			});
			
		});
	}	
	imgDrop();
});

