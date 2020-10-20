let list = [];

//Get variable elements from HTML
const theList = document.getElementById("theList");
const input = document.querySelector("#input");
const icon = document.getElementById("icon");
let idNumber = 0;

icon.addEventListener('click', function(event)
{
    alert("i've been clicked");
});

/// Need event listener connected to the id number of the icon element


//Define class
let Task = {
    selectElements: function()
    {
        this.taskInput = document.getElementById("input_task");
        this.taskList = document.getElementById("task");
        this.taskListChildren = this.taskList.children;
        this.addButton = document.getElementById("add_task_button");
        this.errorMessage = document.getElementById("error");
    },

    createTask: function() 
    {
        //create blank variables
        let taskListItem, taskCheckbox, taskValue, taskButton, taskTrash;

        //create the list item
        taskListItem = document.createElement("li");
        taskItem.setAttribute("class", "task")

        //Create the checkbox
        taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox")

        //create the task value
        taskValue = document.createTextNode(this.taskInput.value);

        // create the delete button
        taskButton = document.createElement("button");

        //create the X icon
        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class", "fas fa-times-circle");

        //connect x Icon with delete button
        taskButton.appendChild(taskTrash);

        //connect elements to the list
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(taskValue);
        taskListItem.appendChild(taskButton);

        //add actual task to the list
        this.taskList.appendChild(taskListItem);
    },

    error: function()
    {
        this.errorMessage.style.display = "block";
    },

    addTask: function()
    {
        let taskValue = this.taskInput.value;
        this.errorMessage.style.display = "none"

        if(taskValue === "")
        {
            this.error();
        }
        else
        {
            this.buildTask();
            this.taskInput.value = "";
        }
    }
};
//         this.toDo = item;
//         this.id = id;
//         this.trash = false;
//         this.completed = false;
//         this.icon = "far fa-arrow-alt-circle-right";
//     }

//     complete()
//     {
//         this.completed = true;
//         this.icon = "fas fa-check-circle";
//     }    
// }


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
                    <i class="${item.icon}" id="icon"></i>
                    <p class="text"> ${item.toDo}</p>
                    <i class="fas fa-times-circle"</i>
                    </li>`

theList.insertAdjacentHTML("beforeend", toDoItem);
}

