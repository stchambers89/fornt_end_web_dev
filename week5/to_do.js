let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.getElementById("input");

//Get class names from HTML
const CHECK = "fas fa-check-circle"
const UNCHECK = "far fa-arrow-alt-circle-right"
const CROSSOUT = 

document.addEventListener('keyup', function (e) 
{
    if (e.key === 'Enter') 
    {
        const item = input.value;
        if(item)
        {
            addItem(item);
            list.push(
                    { 
                        name: item,
                        itemNumber: itemNumber
                    });
        }
        document.getElementById('input').value = '';
        itemNumber++;

    }
  });

function addItem(item)
{
    const toDoItem = `<li class="item">
                    <i class="far fa-arrow-alt-circle-right onclick="complete()"</i>
                    <p class="text"> ${item}</p>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

function complete(event)
{
    list.pop(item.target);
}