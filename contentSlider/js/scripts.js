$(function(){
	var $panels = $('.cell');
	var $container = $('.scroll-container');
	var $scroll = $('#content').css('overflow','hidden');
	
	$('#navigation a').click(selectNav);
	
	function selectNav(){
		$(this).parents('ul:first').find('a').removeClass('current')
			.end()
			.end()
			.addClass('current');
	}
	var scrollOptions = {
		target: $scroll,
		items: $panels,
		navigation: '#navigation a',
		axis:'xy',
		next:'#next',
		prev:'#prev',
		duration: 500,
		easing: 'swing',
		onAfter: trigger
	};
	
	function trigger(data){
		var el = $('#navigation').find('a[href$="'+ data.id +'"]').get(0);
		selectNav.call(el);
	};
	$('#wrapper').serialScroll(scrollOptions);
});
