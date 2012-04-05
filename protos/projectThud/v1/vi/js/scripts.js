$('body').delegate('#the-content > div', 'waypoint.reached', function(event, direction) {
		var $active = $(this);
		//console.log($active.prev());
		if (direction === "up") {
			$active = $active.prev();
		}
		if (!$active.length) $active = $active.end();
		
		$('.section-active').removeClass('section-active');
		$active.addClass('section-active');

		$('header .selected').removeClass('selected');
		$('header a[href=#'+$active.attr('id')+']').addClass('selected');
		$('ul #blob').animate(
					{
						left : $('.selected').position().left,
						width : $('.selected').width()
						 
					},
					{
						duration : 300,
						easing :'swing',
						queue : false // prevent animation cycling and reapeating sam as stop()
					}
				);	
	});
	// Register each section as a waypoint.
	$('#the-content > div').waypoint({ offset: '30%' });
	
	// Negates the flash of non-active nav.
	$('body header > #nav a').click(function() {
		$(this).addClass('selected');
		
	});
	
	
	// Wicked credit to
	// http://www.zachstronaut.com/posts/2009/01/18/jquery-smooth-scroll-bugs.html
	var scrollElement = 'html, body';
	$('html, body').each(function () {
		var initScrollTop = $(this).attr('scrollTop');
		$(this).attr('scrollTop', initScrollTop + 1);
		if ($(this).attr('scrollTop') == initScrollTop + 1) {
			scrollElement = this.nodeName.toLowerCase();
			$(this).attr('scrollTop', initScrollTop);
			return false;
		}    
	});
	
	// Smooth scrolling for internal links
	$("a[href^='#']").click(function(event) {
		event.preventDefault();
		
		var $this = $(this),
		target = this.hash,
		$target = $(target);
		
		$(scrollElement).stop().animate({
			'scrollTop': $target.offset().top -99 //offest body elements due to sticky Header
		}, 500, 'swing', function() {
			window.location.hash = target;
		});
		
	});
	
//Define Variables for Sitcky Header
		var hideThis = $('#sticky-header-bg');
		var showAt = 585;//at what pixel point to show the window				

	$(window).scroll(function(){
	
		//show and hide the	stickybar
		if($(window).scrollTop()>= showAt){
			hideThis.fadeIn(110);						
		}else{
			hideThis.fadeOut(110);
		}
		/*
if($('#blank a').hasClass('selected')){
			$('ul #blob').fadeOut();
		}else{
			$('ul #blob').fadeIn();
		}
*/
		
	/*

		//At a glancers
	var shipGlancer = $('#at_glancer #ship-glance'),
		descrGlancer = $('#at_glancer #descr-glance');
		
	if($('#nav li:nth-child(3) a').hasClass('selected')){
		//console.log('Description IN')
		descrGlancer.show()
		descrGlancer.stop().animate({marginTop : 0},150);
	}else{
		//console.log('Description OUT')
		descrGlancer.stop().animate({marginTop : -50},90, function(){
			$(this).hide();
		});
	}
	if($('#nav li:nth-child(4) a').hasClass('selected')){
		//console.log('ship IN')
		shipGlancer.show();
		shipGlancer.stop().animate({marginTop : 0},150);
	}else{
		//console.log('Ship OUT')
		shipGlancer.stop().animate({marginTop : -50},90, function(){
			$(this).hide();
		});
	}	
*/
	});
		

	
