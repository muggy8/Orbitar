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