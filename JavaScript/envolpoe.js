var clickNum=0;
		function change(){
			clickNum++;
			if(clickNum==1){
				document.getElementById("lettertext").style.color="black";
				document.getElementById("lettertext").style.fontWeight=700;
				document.getElementById("btt").style.color="burlywood";	
				document.getElementById("btt1").style.color="burlywood";
				document.getElementById("btt2").style.color="burlywood";	
				document.getElementById("btt3").style.color="burlywood";
				document.getElementById("evolope").style.animation="s3 0.2s linear 2";
			}
			if(clickNum==2){
				setTimeout("window.location.href='end.html'",100);
			}
		}
		