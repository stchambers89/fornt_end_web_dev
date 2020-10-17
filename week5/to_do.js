let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.querySelector("#input");

//Get class names from HTML
const CHECK = "fas fa-check-circle"
const UNCHECK = "far fa-arrow-alt-circle-right"
const CROSSOUT = 


input.addEventListener('keypress', function (e) 
{
    if (e.key === 'Enter') {
        enter();
      }
  });



function enter()
{
    if(input !== "")
    {
        const item = input.value;
        if(item)
        {
            addItem(item);
            /*list.push(
                    { 
                        name: item,
                        itemNumber: itemNumber
                    });
        
        itemNumber++;*/
        }
    }
    document.getElementById('input').value = '';
    document.getElementById("input").focus();
}


function addItem(item)
{
    const toDoItem = `<li class="item">
                    <i class="far fa-arrow-alt-circle-right onclick="complete()"</i>
                    <p class="text"> ${item}</p>
                    <i class="fas fa-times-circle"</i>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

function complete(event)
{
    list.pop(item.target);
}