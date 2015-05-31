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
console.log(input.value);

if ( (input.indexOf("will") >=0) || (input.indexOf("should") >=0)|| (input.indexOf("can") >=0)){
	var randomNumber = Math.floor(Math.random() * 6);
	output.innerHTML = simpleAnswers[randomNumber];
	newImg();
	clear();
}
else if ( (input.indexOf("day") >=0)){
output.innerHTML = "this will be a day long rememebered";
clear();
}

else{
output.innerHTML = replies[randomNumber];
	clear();
	 }

}
	