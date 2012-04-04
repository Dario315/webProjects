(function($){
	//functions for panel toggles
	
	function slidetoggle(){
		var btn = $('.tout_wrap .play_it');
		//set initial states
		$('.tout_wrap .tout_content').css({'marginTop' : '-250px'});
		$('#tout_list li').addClass('closed');
		
		
		btn.on('mouseenter',function(e){
			var $this = $(this);
			var slider = $this.parent().next(); 
			var siblings = $this.parents('#tout_list li').siblings().find('.tout_content');
			var thisContainer = $this.parents('#tout_list li');
			var sibContainer = thisContainer.siblings();
			
			$this.addClass('selected');
			sibContainer.find('.play_it').removeClass('selected');
			thisContainer.removeClass().addClass('open');
			sibContainer.removeClass().addClass('closed');
			slider.stop().animate({'marginTop' : 0}, 300, function(){
				siblings.stop().animate({'marginTop' : -250}, 400, 'easeOutQuad');
			});
			
			e.preventDefault();
		});		
		
	}
	slidetoggle();

})(jQuery);