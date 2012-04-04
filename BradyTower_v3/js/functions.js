(function($){
	//image overlay functions
	$('.post > .thumbnail').each(function(){
		var $this = $(this);
		var image = $this.children('div.img_container').find('img');
		var slider =  image.parent();
		var underlay = $this.children('span');
		var width = image.width();
		var height = image.height();
		//set values equal to that of the image being loaded in
		
		underlay.height(height -20);
		underlay.width(width -20);//-20 is for the added padding	
		//hover function for Image THumnbs
		console.log(height)
		$this.hover(function(){
			//on over
			slider.animate({'bottom' : -height-8},{'queue' : false, 'duration' : 200, 'easing' : 'easeInBack'});	
		},function(){
			//on out
			slider.animate({'bottom' : 0},{'queue' : false, 'duration' : 300, 'easing' : 'easeOutBack'});
		});
	});
	//end image overlay
	
	//rocket 
	var rocket = $('#lefty #rocket');
	var fire = $('#lefty #rocket #the_fire');
	var bringBack = $('#content_main #back');
	
	$('#lefty #launch_it').on('click' , function(){
		//amimate the fire
		fire.animate({'opacity' : 1},400);
		
		//amimate the rocket
		rocket
			.removeClass().addClass('flight')
			.animate({'top' : -700}, 1000, 'easeInQuart', function(){
				$(this).removeClass().addClass('inSky');
			});
		//open sign
		bringBack.addClass('open');
		return false;
	});
	
	
		bringBack.on('click' , function(){
			rocket.animate({'top' : -152}, 2000, 'easeOutQuart' , function(){
				bringBack.removeClass();
				fire.animate({'opacity' : 0},400);
				rocket.removeClass();
			})
			return false;
		});

	
	
	
})(jQuery );
