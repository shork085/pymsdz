var horn = document.getElementById("horn");
var backm = document.getElementById("bgm");

window.onload=function(){
    show();
    createStar();
    last();

    var cTime = localStorage.getItem('currentTime');
	var speaker = localStorage.getItem('speaker');
	var ispaused = localStorage.getItem('ispaused');

	horn.innerHTML = speaker;
	backm.currentTime = cTime;
	backm.paused = ispaused;

	document.addEventListener('click', function () {
		if(backm.paused){
            		horn.innerHTML = "";
        	}else{
            		horn.innerHTML = "";
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

function show() {
    var str = localStorage.getItem('myname');
    //对中文进行解码
    var txt = decodeURI(str);
    var box = document.getElementById('name');
    box.innerHTML = "To "+txt+":";

    var sentence = ["赋予一件衣服的人格，不需要太多装饰。","不同的自己赋予同一件衣服不同的感觉。","买衣服最重要的目的，是放松我们自己。","衣服不仅是装饰，也是我们身体的保护膜。","你的个性，是这个复杂世界急需的养料。"];
    document.getElementById("sentence").innerHTML=sentence[randomSen(0,sentence.length-1)];
    createStar();
}

function randomSen(min,max){
    var num = max-min+1;
    return Math.floor(Math.random()*num+min);
}

function createStar(){
    var offsetWidth = document.getElementById("star").offsetWidth;
    var offsetHeight = document.getElementById("star").offsetHeight;
    for(var i=0;i<3;i++){
        //创建星，并设置相应样式
        var star = document.createElement("img");
        star.src = "./CSS/img/star.png";
        star.style.position = "absolute";
        star.style.width="7%";
	    star.style.height="6%";
        star.style.left = (Math.random()*offsetWidth)+"px";
        star.style.top = (Math.random()*offsetHeight)+"px";
        star.style.opacity = 0;
        star.style.animation = "st 2s ease";//给星添加animation动画
        
        //动画完成，将星从body中删除
        star.addEventListener("animationend",function(){
            document.getElementById("star").removeChild(this);
        });
        
        //将星添加给body
        document.getElementById("star").appendChild(star);
        
        
    }
}

function last(){
	var url=localStorage.getItem('url');
// 	// var width=document.getElementById("cloth").offsetWidth;
// 	// var height=document.getElementById("cloth").offsetHeight;
// 	// var pic=document.createElement("img");
// 	// pic.style.position="absolute";
// 	// pic.src=str;
// 	// pic.style.width="80%";
// 	// pic.style.height="80%";
// 	// pic.style.top=0;
// 	// document.getElementById("cloth").appendChild(pic);
    document.getElementById("cloth").style.backgroundImage=url;
}
