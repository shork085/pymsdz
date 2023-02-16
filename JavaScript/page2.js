// style代表当前所选中衣服的样式
var style;
//颜色
var clothcolor="";
function cloth(cloth1){
    style=cloth1;
    // 底部选择按钮出现当前被选中衣服对应的颜色
    for(var i=1;i<=3;i++){
        document.getElementById("color"+i).style.backgroundImage="url(./CSS/img/c"+style+i+".png)";
    }

    var click2 = document.getElementById("click2");
    click2.play();
}

//选中一个颜色衣服切换对应颜色
function color(id){
    let c=style;
    clothcolor=id;
    document.getElementById("c"+c).style.backgroundImage="url(./CSS/img/cloth/s"+c+"c"+id+".png)";

    var click1 = document.getElementById("click1");
    click1.play();
}

//保持初始样式
function none(){
    let c=style;
    clothcolor="";
    document.getElementById("c"+c).style.backgroundImage="url(./CSS/img/cloth/s"+c+".png)";

    var click1 = document.getElementById("click1");
    click1.play();
}

//存取变量
function get(){
    localStorage.setItem('style',style);
    localStorage.setItem('clothcolor',clothcolor);

    cTime = backm.currentTime;
    speaker = horn.innerHTML;
    ispaused = backm.paused;
    localStorage.setItem('ispaused', ispaused);
    localStorage.setItem('speaker', speaker);
    localStorage.setItem('currentTime', backm.currentTime);

}


function createStar(){
    var offsetWidth = document.getElementById("ganzi").offsetWidth;
    var offsetHeight = document.getElementById("ganzi").offsetHeight;
    for(var i=0;i<6;i++){
        //创建星，并设置相应样式
        var star = document.createElement("img");
        star.src = "./CSS/img/star.png";
        star.style.position = "absolute";
        star.style.width="5%";
        star.style.height="4%";
        star.style.left = (Math.random()*offsetWidth)+"px";
        star.style.top = (Math.random()*offsetHeight)+"px";
        star.style.opacity = 0;
        star.style.animation = "st 3s ease";//给星添加animation动画
        
        //动画完成，将星从body中删除
        star.addEventListener("animationend",function(){
            document.getElementById("ganzi").removeChild(this);
        });
        
        //将星添加给body
        document.getElementById("ganzi").appendChild(star);
        
    }
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
