(function($){
	$.fn.lavaLamp = function(options){
		
		options = $.extend({
			speed :500,
			color : '#0b2b61',
			reset : 500, //only for hover reset
			easing : 'swing'
		}, options);

		return this.each(function(){
			
			var nav = $(this),
				currentItem = $('#selected', nav),
				blob,
				reset;
				
			$('<li id="blob"></li>').css({
				width : currentItem.outerWidth(),
				//height : currentItem.outerHeight(),
				left : currentItem.position().left,
				//top : currentItem.position().top,
				backgroundColor : options.color 
			}).appendTo('#nav');
			
			blob = $('#blob', nav);
			$('li',nav).click(function(){
					blob.animate(
					{
						left : $(this).position().left,
						width : $(this).width()	
					},
					
					{
						duration : options.speed,
						easing : options.easing,
						queue : false // prevent animation cycling and reapeating sam as stop()
					}
				)
				return false;
			});
			$('li',nav).hover(function(){
				//Hover over
				clearTimeout(reset);
				blob.animate(
					{
						left : $(this).position().left,
						width : $(this).width()
						 
					},
					{
						duration : options.speed,
						easing : options.easing,
						queue : false // prevent animation cycling and reapeating sam as stop()
					}
				);
			},function(){
				//Hover off
				blob.stop().animate({
					left : $(this).position.left,
					width : $(this).width()
				}, options.speed);
				
				reset = setTimeout(function(){
					blob.animate({
						left : currentItem.position().left,
						width :currentItem.width()
					}, options.speed);
				}, options.reset);
			});
		});
	}
}(jQuery));