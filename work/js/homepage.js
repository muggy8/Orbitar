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
	//temp = selected.childNodes;
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
	entry.innerHTML = attractionSelected + " <a href=\"#\" onclick=\"nuke(this, event)\">remove</a>";
	list.appendChild(entry);
	elementCounter ++;
}

function generateRides(){
	var planner = document.getElementById("scheduler");
	var list;
	if (planner.childNodes.length <= 5 ){ // nothing was added so go add the UL tag
		alert("You have not added any events that you want to attend to yet. Please add other events first.");
	}
	else{
		list = document.getElementById("plannedSchedule");
		
		var entry =  document.createElement("li");
		entry. id="rideUp";
		entry.innerHTML = "Ascend: Feb/14/2088 <br> &nbsp;&nbsp;&nbsp;&nbsp;@4:45PM CST <a href=\"#\" onclick=\"nuke(this, event)\">remove</a>";
		
		var first = document.getElementById("item0");
		list.insertBefore(entry, first);
		
		var entry2 =  document.createElement("li");
		entry2. id="rideUp";
		entry2.innerHTML = "Decent: Feb/18/2088 <br> &nbsp;&nbsp;&nbsp;&nbsp;@9:05AM CST <a href=\"#\" onclick=\"nuke(this, event)\">remove</a>";
		list.appendChild(entry2);
	}
}

function nuke(ele, event){
	var li = ele.parentElement;
	var list = ele.parentElement.parentElement;
	
	event.preventDefault();
	
	if (list.childNodes.length == 1){
		list.parentElement.removeChild(list);
	}
	else{
		list.removeChild(li);
	}
}

function findRides(ele){
	//temp = ele;
	var depart = ele.parentElement.childNodes[1].childNodes[1].childNodes[1];
	var back = ele.parentElement.childNodes[1].childNodes[3].childNodes[1];
	//console.log(depart.parentElement);
	if (depart.value == ""){
		alert("You need to fill in a depart date");
		return;
	}
	if (back.value == ""){
		alert("you need to fill in a return date");
		return;
	}
	makeTimetable(depart);
	makeTimetable(back);
}

function makeTimetable(ele){
	var faketimes = generateFakeTimes();
	//console.log(faketimes);
	
	// code segment from: http://stackoverflow.com/questions/17064603/sort-string-array-containing-time-in-format-0900-am
	faketimes.sort(function (a, b) {
	  return new Date('1970/01/01 ' + a) - new Date('1970/01/01 ' + b);
	});

	//console.log(faketimes);
	// end code segment
	
	ele.style.display="none";
	var container = ele.parentElement;
	
	var ol = document.createElement("ol");
	ol.className="ondark";
	container.appendChild(ol);
	
	for (var i = 0; i < faketimes.length; i++){
		var li = document.createElement("li");
		var liText = ele.value + " @ " + faketimes[i]; 
		
		var addLink = document.createElement("a");
		addLink.innerHTML = liText;
		addLink.href = "#";
		addLink.setAttribute("onclick", "addToPlanner(this, event)");
		li.appendChild(addLink);
		
		ol.appendChild(li);
	}
}

function generateFakeTimes(){
	var times = [];
	var numberAvalable = randomBetween(1, 5)
	for (var i = 0; i < numberAvalable; i++){
		var AMorPM = "AM";
		if (randomBetween(1,2) == 2){
			AMorPM = "PM";
		}
		var minutes = randomBetween(0, 59).toString();
		if (minutes.length == 1){
			minutes = "0" + minutes;
		}
		times.push(randomBetween(1,12) + ":" + minutes + " " + AMorPM)
	}
	return times;
}

function randomBetween(min, max){
	return Math.floor((Math.random() * max) + min);
}

var temp;

function addToPlanner(ele, e){
	e.preventDefault();
	
	if (document.getElementById(ele.innerHTML) === null){ // item not added yet
		var container = ele.parentElement.parentElement.parentElement;
		var formName = container.childNodes[1].name;
		//console.log(formName);
		
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
		
		var tripType = "Decent";
		if (formName == "departureDate"){
			tripType = "Ascend";
		}
		
		var li = document.createElement("li");
		li.innerHTML = tripType + ": " + ele.innerHTML.replace("@", "<br> &nbsp;&nbsp;&nbsp;&nbsp;@") + " CST " + "<a href=\"#\" onclick=\"nuke(this, event)\">remove</a>";
		li.id=ele.innerHTML;
		list.appendChild(li);
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
