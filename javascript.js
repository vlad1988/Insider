    function getName (str){
    if (str.lastIndexOf('\\')){
        var i = str.lastIndexOf('\\')+1;
    }
    else{
        var i = str.lastIndexOf('/')+1;
    }						
    var filename = str.slice(i);			
    var uploaded = document.getElementById("fileformlabel");
    uploaded.innerHTML = filename;
}

function fileclick(){
	document.getElementById("upload").click();
}

window.onload = function(){
	var date = new Date();
	var year = date.getFullYear();
	var month = date.getMonth();
	if(month.length<2){
		month = 0 + month;	
	}
	var day = date.getDay();
	var all_date = year + " - " + month + " - " + day;
	document.getElementById("date").innerHTML = all_date;
}

window.addEventListener("scroll",function(){
	if(window.scrollY > 270 || window.pageYOffset > 270){
		document.getElementsByClassName("nav2").item(0).style.top = "0px";
	}
	if(window.scrollY < 270 || window.pageYOffset < 270){
		document.getElementsByClassName("nav2").item(0).style.top = "-120px";
	}	
},false);