var horn = document.getElementById("horn");
var backm = document.getElementById("bgm");


window.onload = function () {

    var cTime = localStorage.getItem('currentTime');
    var speaker = localStorage.getItem('speaker');
    var ispaused = localStorage.getItem('ispaused');

    horn.innerHTML = speaker;
    backm.currentTime = cTime;
    backm.paused = ispaused;

    document.addEventListener('click', function() {
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

function getVal() {
    var myID;
    myID = document.getElementById("myname").value;
    // document.getElementById("name").innerText="To "+myID+":";
    // window.location.href='wait.html?'+'name='+encodeURI(myID.value);
    // alert(myID.value);
    // window.event.returnValue=false;

    //对中文进行编码
    myID = encodeURI(myID);
    var myname;
    localStorage.setItem('myname', myID);

    cTime = backm.currentTime;
    speaker = horn.innerHTML;
    ispaused = backm.paused;
    localStorage.setItem('ispaused', ispaused);
    localStorage.setItem('speaker', speaker);
    localStorage.setItem('currentTime', backm.currentTime);

    var click = document.getElementById("click1");
    click.play();
    setTimeout("go()", 1000);
}

function go() {
    window.location.href = "wait.html";
}
