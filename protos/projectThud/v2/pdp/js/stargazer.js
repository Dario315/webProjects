$(document).ready(function(){
	var activeIndex=0;
	$(window).scroll(function () {
		
		
		//set locking elements
		if($('body').scrollTop()>160){
			$('#leftRail').css('position','fixed');
			$('#leftRail').css('top','0');
		}else{
			$('#leftRail').css('position','absolute');
			$('#leftRail').css('top','160px');
		}
		
		
		//nav activation on scroll
		 $("#rightRail div").each(function(){
			var position = $('body').scrollTop();
			var offsetter = $(this).offset().top;
			
			if((offsetter - position) < 400 && position < (offsetter + $(this).height() -400 )){
					activeIndex = $(this).index('#rightRail div');
					$('#nav div.active').removeClass('active');
					$('#nav div').eq(activeIndex).addClass('active');
					//console.log('index: ' + activeIndex +' position: ' + $('body').scrollTop());
					//console.log('index: ' + activeIndex +' diff: ' + (offsetter - position));
			}
			
		 });
		 
	});
	
	 $('#nav div').click(function(){
			 var scrollIndex = $(this).index('#nav div');
			 var scrollDiv = $("#rightRail div").eq(scrollIndex);
			 var scrollPos = scrollDiv.offset().top +60;
			 if(scrollIndex != activeIndex){
			 	console.log(scrollPos);
				console.log(scrollIndex);
				if(scrollIndex == 0){
					$('body').animate({scrollTop : scrollPos-80},'100');
				}else{
			 		$('body').animate({scrollTop : scrollPos},'100');
				}
			 }
	 });
	
});


function showAuth(){
	$('#auth').fadeIn();
	$('#new').hide();
	$('#refurb').hide();
	$('#used').hide();
	$('#bundles').hide();
	$('#local').hide();
	$('#all').hide();
}

function showNew(){
	$('#auth').hide();
	$('#new').fadeIn();
	$('#refurb').hide();
	$('#used').hide();
	$('#bundles').hide();
	$('#local').hide();
	$('#all').hide();
}

function showRefurb(){
	$('#auth').hide();
	$('#new').hide();
	$('#refurb').fadeIn();
	$('#used').hide();
	$('#bundles').hide();
	$('#local').hide();
	$('#all').hide();
}

function showUsed(){
	$('#auth').hide();
	$('#new').hide();
	$('#refurb').hide();
	$('#used').fadeIn();
	$('#bundles').hide();
	$('#local').hide();
	$('#all').hide();
}

function showBundles(){
	$('#auth').hide();
	$('#new').hide();
	$('#refurb').hide();
	$('#used').hide();
	$('#bundles').fadeIn();
	$('#local').hide();
	$('#all').hide();
}

function showLocal(){
	$('#auth').hide();
	$('#new').hide();
	$('#refurb').hide();
	$('#used').hide();
	$('#bundles').hide();
	$('#local').fadeIn();
	$('#all').hide();
}

function showAll(){
	$('#auth').hide();
	$('#new').hide();
	$('#refurb').hide();
	$('#used').hide();
	$('#bundles').hide();
	$('#local').hide();
	$('#all').fadeIn();
}