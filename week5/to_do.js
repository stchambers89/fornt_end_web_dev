let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.querySelector("#input");

//Define class
class Todo {
    constructor(item, id)
    {
        this.toDo = item;
        this.id = id;
        this.completed = false;
        this.statusIcon;
        this.done = "fas fa-check-circle";
        this.notDone = "far fa-arrow-alt-circle-right";
    }
}

let listPosition = 0;

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
            let thingToDo = new Todo(item, listPosition)
            addItem(thingToDo);
            list.push(thingToDo);
        
        listPosition++;
        }
    }
    document.getElementById('input').value = '';
    document.getElementById("input").focus();
}


function addItem(item)
{
    let item.status = item.completed == false ? '' : ''
    //Get class names from HTML

    const toDoItem = `<li class="item">
                    <i class="${status}"</i>
                    <p class="text"> ${item.toDo}</p>
                    <i class="fas fa-times-circle"</i>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

