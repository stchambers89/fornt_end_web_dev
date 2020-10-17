let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.querySelector("#input");
let idNumber = 0;


/// Need event listener connected to the id number of the icon element


//Define class
class Todo {
    constructor(item, id)
    {
        this.toDo = item;
        this.id = id;
        this.trash = false;
        this.completed = false;
        this.icon = "far fa-arrow-alt-circle-right";
    }

    complete()
    {
        this.completed = true;
        this.icon = "fas fa-check-circle";
    }    
}


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
            let thingToDo = new Todo(item, idNumber)
            addItem(thingToDo);
            list.push(thingToDo);
            console.log(`item: ${thingToDo.toDo} and the index is-${thingToDo.id}`)
        }

        idNumber++;
    }
    document.getElementById('input').value = '';
    document.getElementById("input").focus();

    
}


function addItem(item)
{
    //let status = item.completed == false ?  : ''
    //Get class names from HTML

    

    const toDoItem = `<li class="item" >
                    <i class="${item.icon}" id="${item.id}"></i>
                    <p class="text"> ${item.toDo}</p>
                    <i class="fas fa-times-circle"</i>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

