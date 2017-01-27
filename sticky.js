var frame = document.getElementById("frame");
var sticker = document.getElementById("sticker");
if(frame){
	var frameTop = frame.getBoundingClientRect().top + window.pageYOffset;
	var frameBottom = frame.getBoundingClientRect().bottom + window.pageYOffset;
	var frameHeight = frame.getBoundingClientRect().height;
	console.log(frameTop);
	console.log(frameBottom);
	console.log(frameHeight);
	
	if(frameHeight>=window.innerHeight){
		sticker.style.height = window.innerHeight+"px";
	}
	console.log(window.pageYOffset, document.documentElement.scrollTop)
	document.onscroll = function(){
		var windowTop  = window.pageYOffset || document.documentElement.scrollTop;
		if(windowTop > frameTop){
			sticker.style="position:fixed;top:0;height:" + sticker.style.height;
		}else{
			sticker.style="position:absolute;top:0;height:" + sticker.style.height;
		}
		if(windowTop + window.innerHeight > frameBottom){
			sticker.style="position:absolute;bottom:0;height:" + sticker.style.height;
		}
	}
}