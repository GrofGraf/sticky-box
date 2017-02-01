var frame = document.getElementById("frame");
var sticker = document.getElementById("sticker");
if(frame){
	function initSticky(){
		setStickyPosition();
		document.addEventListener("scroll", setStickyPosition);
		document.addEventListener("touchmove", setStickyPosition);
	}
	window.onresize = function(event){
		initSticky();
	}
	initSticky();
}

function setStickyPosition(){
	var position  = window.pageYOffset || document.body.scrollTop;
	var frameTop = frame.getBoundingClientRect().top + position;
	var frameBottom = frame.getBoundingClientRect().bottom + position;
	var frameHeight = frame.getBoundingClientRect().height;
	if(frameHeight >= window.innerHeight){
		sticker.style.height = window.innerHeight+"px";
		if(position >= frameTop){
			sticker.style="position:fixed;top:0;height:" + sticker.style.height;
		}else{
			sticker.style="position:absolute;top:0;height:" + sticker.style.height;
		}
		if(position + window.innerHeight > frameBottom){
			sticker.style="position:absolute;bottom:0;height:" + sticker.style.height;
		}
	}else{
		sticker.style = "position:absolute;top:0;height:100%;";
		document.removeEventListener("scroll", setStickyPosition);
		document.removeEventListener("touchmove", setStickyPosition);
	}
}