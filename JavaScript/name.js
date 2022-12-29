function getVal(){
    var myID;
    myID = document.getElementById("myname").value;
    // document.getElementById("name").innerText="To "+myID+":";
    // window.location.href='wait.html?'+'name='+encodeURI(myID.value);
    // alert(myID.value);
    // window.event.returnValue=false;

    //对中文进行编码
    myID = encodeURI(myID);
    var myname;
    localStorage.setItem('myname',myID);
}