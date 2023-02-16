var clickNum = 0;
function change() {
	clickNum++;
	if (clickNum == 2) {
		document.getElementById("lettertext").style.color = "black";
		document.getElementById("lettertext").style.fontWeight = 700;
		document.getElementById("btt").style.color = "burlywood";
		document.getElementById("btt1").style.color = "burlywood";
		document.getElementById("btt2").style.color = "burlywood";
		document.getElementById("btt3").style.color = "burlywood";
		document.getElementById("evolope").style.animation = "s3 0.2s linear 2";

		var click = document.getElementById("click");
		click.play();
	}
	if (clickNum == 3) {
		setTimeout("go()", 100);
	}
}

function go(){
	cTime = backm.currentTime;
    speaker = horn.innerHTML;
    ispaused = backm.paused;
    localStorage.setItem('ispaused', ispaused);
    localStorage.setItem('speaker', speaker);
    localStorage.setItem('currentTime', backm.currentTime);

	window.location.href="end.html";
}

var horn = document.getElementById("horn");
var backm = document.getElementById("bgm");


window.onload = function () {

	var cTime = localStorage.getItem('currentTime');
	var speaker = localStorage.getItem('speaker');
	var ispaused = localStorage.getItem('ispaused');

	horn.innerHTML = speaker;
	backm.currentTime = cTime;
	backm.paused = ispaused;

	document.addEventListener('mouseup', function () {
		if(backm.paused){
        	}else{
            		backm.play();
        	}
	});
}


function ismute() {
	//阻止事件冒泡
	event.stopPropagation();
	//若为暂停状态
	if (backm.paused) {
		horn.innerHTML = "";
		backm.play();
	} else {
		horn.innerHTML = "";
		backm.pause();
	}

}
