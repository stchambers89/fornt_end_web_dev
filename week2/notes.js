/*******************************************************************************
* ---- const, let, and var -------
* Last week was the first time that I have been exposed to these so I wanted to
* learn more. Turns out var's can have a global or function scope, while const
* and let have block scope. So to midigate the chance of variables changing
* state it would be better to use const if the variable never needs to change,
* or let if the data needs to be manipulated. 
*
* https://www.freecodecamp.org/news/var-let-and-const-whats-the-difference/
*******************************************************************************/

var speak = "bark";

function differentSpeak() 
{
    var talk = "meow";
}
// console.log(talk); will result in an error becasue it is out of scope

//Within or without scope var can be changed as well as redefined

var changeVar = 4;

console.log("changeVar = " + changeVar);
console.log("changing variable now");
changeVar = "ten cats";
console.log("changeVar now = " + changeVar);

//The above code will not work using let or const.


/*******************************************************************************
* ---- Array's and methods -------
* When refreshing myself on the arrays I was hoping to see pop and push methods
* so ther would not be gaps in the array that show as "undefined". In reading a
* bit further it looks like the array is not a set fata structure. From my
* reading it looks like they are defined at run time and depend on what the
* array holds; most comman are C++ arrays and linked-lists. Which given the
* different methods that array has in .js, makes a bit of sense.   
*
* https://stackoverflow.com/questions/57192549/what-data-structure-are-arrays-implemented-with-in-javascript
* https://www.w3schools.com/js/js_array_methods.asp
*******************************************************************************/

let cars = ["ford", "truck", "sportscar", "racecar", "gocart", "van"];
//array length is 5

cars.push("Honda"); //Honda added to array

let arrayLength = cars.length(); // array length is now 6

let firstcar = cars.shift(); //firstcar is equal to "ford"


/*******************************************************************************
* ---- == vs === -------
* Simply put the more ='s there are the more strict the compaison. when === is
* used both the value and type must be the same. When using == however, it
* looks for loose equality. So it trys to convert the value and or type into
* a common type. 
* See Below:
*******************************************************************************/

const number1 = 5;
const number2 = 5;

if(number1 === number2) // equates to true same TYPE, same VALUE. 
{
    console.log("they are the same!"); //this will fire
}

const five = '5';

if(number1 === five) // types not the same int != string
{
    console.log("they are the same!");
}
else
{
    console.log("these are different"); //this will fire
}

//loose compare
if(number1 == five) // will try to convert either number1 to a string, or five to an int. 
{
    console.log("they are the same!");//this should fire. 
}
else
{
    console.log("these are different");
}

/*******************************************************************************
* ---- String Concatenation options ----
*******************************************************************************/
// Using + and =
//used to doing this, but it can be long to type out, and kind of hard to read
let greeting = "hello " + "world";

//using shorthand +=
greeting += " how are you doing?"



//join arrays:
let holiday = ['Twas', 'the', 'night', 'before', 'Christmas'].join(' ');
// 'Twas the night before Christmas'

//the charater within the join() will be inserted bewteen each element of the array. 
let holiday = ['Twas', 'the', 'night', 'before', 'Christmas'].join('1');
// 'Twas1the1night1before1Christmas' becasue we said place the 1 in the middle. 

//using backticks - lets say we have a person object that id's male/female. 
//this is not an boject just a simple variable, bu tit will work

let personGender = "male";

if(personGender === "male")
{
    console.log(`The person is a ${personGender}`);
}
else
{
    console.log(`the person is female`);
}