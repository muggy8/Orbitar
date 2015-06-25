function elevatorChecker(){
	var height = $(window).scrollTop(); // jquery documentations
	//console.log(height);
	if (height > 1088){
		$("#cableCart").css("display", "none");
	}
	else{
		$("#cableCart").css("display", "block");
	}
	//change brom black to gray between 164-360
	if (height <= 145){
		$("#cableCart").css("background-color", "#000000");
		$("#elevatorCable").css("background-color", "#000000");
	}
	
	if (height>145 && height < 400){
		var grayscale = height.map(145, 400, 0, 150);
		$("#cableCart").css("background-color", "rgb(" + grayscale + "," + grayscale + "," + grayscale + ")");
		$("#elevatorCable").css("background-color", "rgb(" + grayscale + "," + grayscale + "," + grayscale + ")");
	}
	
	if (height >= 400){
		$("#cableCart").css("background-color", "rgb(" + 150 + "," + 150 + "," + 150 + ")");
		$("#elevatorCable").css("background-color", "rgb(" + 150 + "," + 150 + "," + 150 + ")");
	}
	
	//
}

var elementCounter = 0;
function addEvent(ele){
	//console.log(ele.parentElement.parentElement.parentElement.parentElement);
	var selected = ele.parentElement.parentElement.parentElement.parentElement; //get which overall box the button is in
	temp = selected.childNodes;
	var attractionSelected = selected.childNodes[1].childNodes[1].innerHTML;
	
	var planner = document.getElementById("scheduler");
	
	var list;
	if (planner.childNodes.length <= 5 ){ // nothing was added so go add the UL tag
		list = document.createElement("ul");
		list.id = "plannedSchedule";
		planner.appendChild(list);
	}
	else{
		list = document.getElementById("plannedSchedule");
	}
	var entry =  document.createElement("li");
	entry. id="item" + elementCounter;
	entry.innerHTML = attractionSelected;
	list.appendChild(entry);
	elementCounter ++;
}
var temp;

function generateRides(){
	var planner = document.getElementById("scheduler");
	var list;
	if (planner.childNodes.length <= 5 ){ // nothing was added so go add the UL tag
		alert("You have not added any events that you want to attend to yet. Please add other events first.");
	}
	else{
		list = document.getElementById("plannedSchedule");
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

Number.prototype.map = function ( inMin , inMax , outMin , outMax ) {
  return ((( this - inMin ) * ( outMax - outMin )) / ( inMax - inMin )) + outMin;
}
// code from / inspired by: http://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
