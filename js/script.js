var replies = [];

replies[0] = "Join the dark side";
replies[1] = "If you only new the power of the darkside.";
replies[2] = "The force is strong with you";
replies[3] = "Dont fail me again!";
replies[4] = "Impressive.";

var simpleAnswers = [];

simpleAnswers[0] = "No!";
simpleAnswers[1] = "Yes.";
simpleAnswers[2] = "Absolutley.";
simpleAnswers[3] = "Ofcourse.";
simpleAnswers[4] = "Probally not.";
simpleAnswers[5] = "Doubtfull.";

var simpleAnswers2= [];

simpleAnswers2[0] = "Good";
simpleAnswers2[1] = "Bad";
simpleAnswers2[2] = "horrible";
simpleAnswers2[3] = "not bad.";
simpleAnswers2[4] = "not good";
simpleAnswers2[5] = "great.";

var quesWords = [];

	quesWords[0] = "will";
	quesWords[1] = "should";
	quesWords[2] = "can";
	quesWords[3] = "are";
	quesWords[4] = "did";
	quesWords[5] = "could";
	quesWords[6] = "would";
	
	
var button = document.querySelector("#button");
button.addEventListener("click", clickHandler, false);
button.style.cursor = "pointer";
	function clear(){
    document.getElementById("textbox").value="";
}
function newImg(){
var newImg = document.getElementById("dv");
	newImg.src = "img/dvforcechoke2.png";
	
	}

function clickHandler()
{
var output = document.querySelector("#output");
var input = document.querySelector("#textbox");
var randomNumber = Math.floor(Math.random() * 5);
input = input.value.toLowerCase();


if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[0]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[1]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[2]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[3]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[4]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[5]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
if ( (input.indexOf("how") >=0) && (input.indexOf(quesWords[6]) >=0)){
var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers2[randomNumber];
clear();
}
else if ( (input.indexOf(quesWords[0]) >=0) || (input.indexOf(quesWords[1]) >=0)|| (input.indexOf(quesWords[2]) >=0)|| (input.indexOf(quesWords[3]) >=0)
|| (input.indexOf(quesWords[4]) >=0)|| (input.indexOf(quesWords[5]) >=0)|| (input.indexOf(quesWords[6]) >=0)){
	var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers[randomNumber];
	clear();
}

else if ( (input.indexOf("day") >=0)){
output.innerHTML = "this will be a day long rememebered";
clear();
}
else if ( (input.indexOf("armor") >=0)){
var str = "Click here for more";
output.innerHTML = "Too much to tell " + str.link("http://starwars.wikia.com/wiki/Darth_Vader%27s_armor");
clear();
}

else{
output.innerHTML = replies[randomNumber];
	clear();
	 }




}
	