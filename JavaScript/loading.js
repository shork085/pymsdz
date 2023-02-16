// var progress = document.getElementById("bar2");
// progress.addEventListener("animationend",change());
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
        document.getElementById('bgm').play();
    });
}

function ismute(){
    //阻止事件冒泡
    event.stopPropagation();
    //若为暂停状态
    if(backm.paused){
        horn.innerHTML="";
        backm.play();
    }else{
        horn.innerHTML="";
        backm.pause();
    }
   
}

setTimeout("change()",6500);
function change(){
    cTime = backm.currentTime;
    speaker = horn.innerHTML;
    ispaused = backm.paused;
    localStorage.setItem('ispaused',ispaused);
    localStorage.setItem('currentTime',backm.currentTime);
    localStorage.setItem('speaker',speaker);

    window.location.href="page2.html";
}

