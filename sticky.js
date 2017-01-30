var frame = document.getElementById("frame");
var sticker = document.getElementById("sticker");
if(frame){
	function initSticky(){
		var frameTop = frame.getBoundingClientRect().top + window.pageYOffset;
		var frameBottom = frame.getBoundingClientRect().bottom + window.pageYOffset;
		var frameHeight = frame.getBoundingClientRect().height;
		setStickyPosition(frameTop, frameBottom, sticker);
		if(frameHeight>=window.innerHeight){
			sticker.style.height = window.innerHeight+"px";
			document.onscroll = function(){
				setStickyPosition(frameTop, frameBottom, sticker);
			}
		}else{
			sticker.style="position:absolute;top:0;height:100%;";
			document.onscroll = null;
		}
	}
	window.onresize = function(event){
		initSticky();
	}
	initSticky();
}

function setStickyPosition(top, bottom, sticker){
	var windowTop  = window.pageYOffset || document.documentElement.scrollTop;
	if(windowTop > top){
		sticker.style="position:fixed;top:0;height:" + sticker.style.height;
	}else{
		sticker.style="position:absolute;top:0;height:" + sticker.style.height;
	}
	if(windowTop + window.innerHeight > bottom){
		sticker.style="position:absolute;bottom:0;height:" + sticker.style.height;
	}
}