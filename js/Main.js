
$(document).ready(function(){
	
	var currentIdx = 0;
	showImage();

	function showImage() {
	    
		var banImg = document.getElementsByClassName("banImg");
	    
		for (var i = 0; i < banImg.length; i++) {
	    	banImg[i].style.display = "none";  
	    }
	    
		currentIdx++;
	    
		if (currentIdx > banImg.length) {
	    		currentIdx = 1;
	    }    
	    
		banImg[currentIdx-1].style.display = "block";  
	    
		setTimeout(showImage, 1500);    
	}
	    
	    
	    
	
	/*************bannerBtn****************/
	var currentIndex=0;
	var $banner = $("ul#banner li");
	var $bannerImg = $("ul#banner img");
	var timer = setInterval(function(){
		
		var $item = $banner.eq(currentIndex);
		if(currentIndex>=1){
			var $bItem = $item.prev();
			$bItem.removeClass("bannerBtnColor");
		}else if(currentIndex==0){
			var $bItem = $("ul#banner").children().last();
			$bItem.removeClass("bannerBtnColor");
		}
		
		
		if($item.hasClass("bannerBtnColor")==false){
			$item.addClass("bannerBtnColor");
		}
		else{
			$item.removeClass("bannerBtnColor");
		}
		
		currentIndex++;
		
		if(currentIndex>=$banner.length){
			currentIndex=0;
		}

		
		
	},1500);
	
});



