var cloth;
var color;
//花纹
var figure;
var url;
function show(){
    cloth = localStorage.getItem('style');
    color = localStorage.getItem('clothcolor');

    //按钮
    for(var i=1;i<=3;i++){
        document.getElementById("btn"+i).style.backgroundImage="url('./CSS/img/c"+cloth+"bp"+i+".png')";
    }

    if(color==""){
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+".png)";
    }else{
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+"c"+color+".png)";
    }
}

function pattern(id){
    figure=id;
    if(color==""){
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+"p"+id+".png)";
    }else{
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+"c"+color+"p"+id+".png)";
    }
    // localStorage.setItem('pattern',id);

    var click1 = document.getElementById("click1");
    click1.play();
}

function none(){
    figure="";
    if(color==""){
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+".png)";
    }else{
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+"c"+color+".png)";
    }
    // localStorage.setItem('pattern',"");

    var click1 = document.getElementById("click1");
    click1.play();
}

function get(){
    url=document.getElementById("cloth").style.backgroundImage;
    localStorage.setItem('pattern',figure);
    localStorage.setItem('url',url);

    cTime = backm.currentTime;
    speaker = horn.innerHTML;
    ispaused = backm.paused;
    localStorage.setItem('ispaused', ispaused);
    localStorage.setItem('speaker', speaker);
    localStorage.setItem('currentTime', backm.currentTime);

}



function createStar(){
    var offsetWidth = document.getElementById("star").offsetWidth;
    var offsetHeight = document.getElementById("star").offsetHeight;
    for(var i=0;i<10;i++){
        //创建星，并设置相应样式
        var star = document.createElement("img");
        star.src = "./CSS/img/star.png";
        star.style.position = "absolute";
        star.style.width="7%";
        star.style.height="6%";
        star.style.left = (Math.random()*offsetWidth)+"px";
        star.style.top = (Math.random()*offsetHeight)+"px";
        star.style.opacity = 0;
        star.style.animation = "st 3s ease";//给星添加animation动画
        
        //动画完成，将星从body中删除
        star.addEventListener("animationend",function(){
            document.getElementById("star").removeChild(this);
        });
        
        //将星添加给body
        document.getElementById("star").appendChild(star);
        
    }
    
    
}

var horn = document.getElementById("horn");
var backm = document.getElementById("bgm");


window.onload = function () {

    show();

    var cTime = localStorage.getItem('currentTime');
    var speaker = localStorage.getItem('speaker');
    var ispaused = localStorage.getItem('ispaused');

    horn.innerHTML = speaker;
    backm.currentTime = cTime;
    backm.paused = ispaused;

    document.addEventListener('mouseup', function() {
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
