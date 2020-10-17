let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.querySelector("#input");


//To do adds on enter
input.addEventListener('keyup', function (e) 
{
    if (e.key === 'Enter') {
        enter();
      }
  });

//enters the actual value and displays to HTML
function enter()
{
    if(input !== "")
    {
        const item = input.value;
        if(item)
        {
            addItem(item);
            // list.push(
            //         { 
            //             NEED TO CREATE CUSTOM CLASS AND SET VAIABLES TO ALLOW CORRECT ICONS TO DISPLAY
            //         });
        
        //itemNumber++;
        }
    }
    document.getElementById('input').value = '';
    document.getElementById("input").focus();
}


function addItem(item)
{
    //Get class names from HTML
const DONE = "fas fa-check-circle"
let NOTDONE = "far fa-arrow-alt-circle-right"
//const CROSSOUT = 

    const toDoItem = `<li class="item">
                    <i class="${NOTDONE}"</i>
                    <p class="text"> ${item}</p>
                    <i class="fas fa-times-circle"</i>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

function complete(event)
{
    list.pop(item.target);
}