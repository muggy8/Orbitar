function elevatorChecker(){
	var height = $(window).scrollTop();
	//console.log(height);
	if (height > 1088){
		$("#cableCart").css("display", "none")
	}
	else{
		$("#cableCart").css("display", "block")
	}
}

function submitForm(form){
	alert("sorry this is just a dummy website for a web design class therefore nothing actually works. sorry if you were actually expectin a real thing...");
	return false;
}

function schedulerView(ele){
	ele.className += " schedulerShow";
	ele.setAttribute("onclick", "schedulerHide(this)");
}

function schedulerHide(ele){
	ele.className = ele.className.replace(" schedulerShow", "");
	ele.setAttribute("onclick", "schedulerView(this)");
}