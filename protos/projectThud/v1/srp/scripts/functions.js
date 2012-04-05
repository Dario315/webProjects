(function(){
	//set Global Variables
	var lis = $('#list-container #list li');
	var activate = $('#list-container #list>li');
	var panel  = $('#list-container #slider-container');
	var hisTab = $('#list-container #list #mini-hist');
	var hisTabLink = $('#list-container #list #mini-hist li a');
	
	var headerHeight = $('#header').outerHeight() + $('#title-bar').outerHeight();
	var winHeight = $(window).height();
	var eleHeight = 174//$('#list-container #list li').outerHeight();
	var activeIndex = null;
	panel.hide();
	$(window).scroll(function(){
		
		if(activeIndex != null){
			var scrollTop = $(window).scrollTop();
			var eleOffset = $('#list-container #list li.current-panel').offset().top;
			
				if(winHeight + scrollTop < eleOffset){
					hisTab.addClass('open');
					console.log('off the BTM');
				}else if(scrollTop + headerHeight  > (eleOffset + eleHeight)){
					hisTab.addClass('open');
					console.log('off the TOP');				
				}else{
					hisTab.removeClass().addClass('closed');
					console.log('-----------------------------');
					console.log('headerHeight ' + headerHeight);
					console.log('eleHeight ' + eleHeight);
					console.log('scrollTop ' + scrollTop);
					console.log('eleOffset ' + eleOffset)
					console.log('activeIndex' + activeIndex);
					console.log('winHeight' + winHeight);
					console.log('-----------------------------');
				}//close else if strand
		}//close if
	});//close scroll function

	activate.on('click',function(e){
		var $this = $(this);
		activeIndex = $this.index() -2;
		$('li.current-panel').removeClass('current-panel');
		$this.addClass('current-panel');
		$('li.current-panel').removeClass('deselect');
		$this.siblings().addClass('deselect');
		
		if(panel.hasClass('closed')){
				//if panel is CLOSED on click do this
				panel.show();
				panel.animate({'marginLeft' : '170px'}, function(){
					$this.parent().siblings('li').addClass('deselect');
					$this.parent().addClass('current-panel');
					panel.removeClass().addClass('open');
										
				});
							
			 }else{
				//if panel is OPEN on click do this
				panel.animate({'marginLeft' : '-200px'}, function(){
					$this.parent().removeClass().addClass('current-panel');
					$this.parent().siblings('li').addClass('deselect');
					$this.parent().siblings().removeClass('current-panel');
					panel.removeClass().addClass('closed');
					$('#list-container #list #mini-hist').removeClass().addClass('closed');
					panel.animate({'marginLeft' : '170px'}, function(){
						panel.removeClass().addClass('open');
					});//call back for open close
				});//close animate function
			 }//close else
		e.preventDefault();
	})//close click handler
	
	$(window).resize(function(){
		winHeight = $(window).height(); 
	});//close winResize function	
		
		//x button to close panel
		panel.children('a.close-panel').on('click', function(e){
			panel.animate({'marginLeft' : '-200px'}, function(){
				panel.hide();
			});
			panel.removeClass('open').addClass('closed');
			lis.removeClass();
			$('#list-container #list nav#mini-hist').removeClass('open').addClass('closed');;
				e.preventDefault();
		});
		
	//history tab click
	hisTabLink.on('click',function(){
		console.log('click')
		panel.removeClass().addClass('closed');
		panel.animate({'marginLeft' : '-200px'}, function(){
			panel.animate({'marginLeft' : '170px'});
			panel.removeClass().addClass('open');
		});//call back for open close
		return false;
	});

})();
