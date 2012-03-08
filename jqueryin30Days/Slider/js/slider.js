(function($){
	//Set up Variables
	var sliderUl = $('div.slider').css('overflow','hidden').children('ul'),
	imgs = sliderUl.find('img'),		//find images
	imgWidth = imgs[0].width,		//get width of first image
	imgsLen = imgs.length,		//get Length (amount) of image list
	currImg = 1,		//keep track of what image is shown
	totalImgWidth = imgsLen * imgWidth;		//find overall width images combined 

	$('#slider-nav').show().find('button').on('click', function(){
		var direction = $(this).data('dir'),
			loc = imgWidth; //500
			
		//updage current value
		//(direction === 'next')? ++currImg : --currImg; // this is the same as the if else 'ternary operator'
		if(direction === 'next'){
			currImg +=1;
		}else{
			currImg -=1;
		}
		
		// if first image
		if(currImg === 0){
			currImg = imgsLen;
			direction === 'next';
			loc = -totalImgWidth + imgWidth;
		}else if(currImg -1 === imgsLen){
			currImg = 1;
			loc = 0;
		}
		
		transition(sliderUl, loc, direction);
	});
	function transition( container, loc, direction ){
		var unit; // -+ or -=
		if(direction && loc !==0){
			unit = (direction === 'next')? '-=' : '+='; 
		}
		container.animate({
			marginLeft :unit ? (unit + loc) : loc
		})
	}
})(jQuery);