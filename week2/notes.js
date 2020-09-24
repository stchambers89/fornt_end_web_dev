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

