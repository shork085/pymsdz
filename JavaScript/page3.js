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
}

function none(){
    figure="";
    if(color==""){
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+".png)";
    }else{
        document.getElementById("cloth").style.backgroundImage="url(./CSS/img/cloth/s"+cloth+"c"+color+".png)";
    }
    // localStorage.setItem('pattern',"");
}

function get(){
    url=document.getElementById("cloth").style.backgroundImage;
    localStorage.setItem('pattern',figure);
    localStorage.setItem('url',url);
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