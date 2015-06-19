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