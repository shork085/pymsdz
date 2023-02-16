var backm = document.getElementById("bgm");
var horn = document.getElementById("horn");

document.addEventListener('mouseup', function() {
    document.getElementById('bgm').play();
});



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

function music(){
    var click = document.getElementById("click1");
    click.play();
    setTimeout("go()",1000);
}
function go(){
    var time = backm.currentTime;
    var speaker = horn.innerHTML;
    var ispaused = backm.paused;
    localStorage.setItem('ispaused',ispaused);
    localStorage.setItem('currentTime',time);
    localStorage.setItem('speaker',speaker);
    backm.pause();
    window.location.href="start.html";
}
