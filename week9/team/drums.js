//console.log('connected');

/*
WES BOS JS30 DAY 1 - Followed along, and researched things for it in the middle of it
*
Keyboard playing drum kit: 
Step One: add eventListener for keys pressed
Step Two: Use a function to select the object that was pressed, and specify which soundKey needed
Step Three: Change class to .playing for userInput
*/

/***Having problem with getting sounds to play:
-Time to console log things, to see if we are getting input
-keys are not being shown in console log when pressed.
-window should work, when changed to document.body it does output data, just not what we want
-tried window.addEventListener('keydown', function) example in w3schools and it works
-Suspecting the parameter to be an issue
-the paramater is the key being pressed, and is passed when EventListener is activated
-Got it! - Syntax error...yay... In the data-key="e.keyCode" I left a bracket inside the "" 
Figured out the error after reading through someone's journey on js30
https://medium.com/@murkrage/javascript-30-day-1-drum-kit-cb3d6e5780ce
*
*
*/
let newTotal = 10;

function playSound(e) {
	const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
	const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
	if (!audio) return; //stops function if audio is not on that key
	audio.currentTime = 0;
	audio.play();
	key.classList.add("playing");
	let marginTop = key.style.top; //40px
	marginTop = marginTop.slice(0,2);
	marginTop = parseInt(marginTop);
	
	//let stringNum = marginTop.match(/^[1-9]?[0-9]/); //40
	//console.log(stringNum);
	console.log(marginTop);
	key.setAttribute("style", `top:${newTotal}px`);
	newTotal === 100 ? (newTotal = 0) : (newTotal += 10);
	
	//string.match( /\d(?!px)/);
	
}
function removeTransition(e) {
	if (e.propertyName !== "transform") return; //skip if it's not a transform
	//console.log(e);
	this.classList.remove("playing"); //remove the playing class
}
//Grab all the key div's
const keys = Array.from(document.querySelectorAll(".key"));
//console.log(keys);
//iterate over nodeList and remove playing class when transform is done
keys.forEach((key) => key.addEventListener("transitionend", removeTransition));
// playSound when key is down
//window.addEventListener('keydown', e => {console.log(e);})
document.addEventListener("keydown", playSound);



//javascript: (function () {     let errors = null;     let xhttp1 = new XMLHttpRequest();     xhttp1.open("GET", document.location.href, true);     xhttp1.onreadystatechange = function () {         if (this.readyState == 4 && this.status == 200) {             let doc = this.responseText;             let xhttp2 = new XMLHttpRequest();             xhttp2.open("POST", "https://validator.w3.org/nu/?out=json", true);             xhttp2.setRequestHeader("Content-type", "text/html; charset=utf-8");             xhttp2.onreadystatechange = function () {                 if (this.readyState == 4 && this.status == 200) {                     errors = JSON.parse(this.responseText);                     let errorpage = "";                     errors.messages.forEach(function (element) {                         errorpage += "Type: " + element.type + "\nLine: " + element.lastLine + "\nMessage: " + element.message + "\nExtract: " + element.extract + "\n\n";                     });                     let win = window.open("", "", "height=800,width=800");                     win.document.body.innerText = errorpage;                 }             };             xhttp2.send(doc);         }     };     xhttp1.send(); })();

