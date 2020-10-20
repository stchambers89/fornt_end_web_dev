//Define class
let tasker = {
    construct: function()
    {
        this.selectElements();
        this.bindEvents();
        this.scanTaskList();
    },

    selectElements: function()
    {
        this.taskInput = document.getElementById("input_task");
        this.taskList = document.getElementById("tasks");
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
        taskListItem.setAttribute("class", "task")

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
        this.errorMessage.style.display = "none";

        if(taskValue === "")
        {
            this.error();
        }
        else
        {
            this.createTask();
            this.taskInput.value = "";
            this.scanTaskList();
        }
    },

    enterKey: function(event)
    {
        if(event.keyCode === 13)
        {
            this.addTask();
        }
    },

    bindEvents: function()
    {
        //called when button is clicked
        this.addButton.onclick = this.addTask.bind(this);

        //called when enter is ckicked
        this.taskInput.onkeypress = this.enterKey.bind(this);
    },

    scanTaskList: function()
    {
        
        let taskListItem, checkBox, deleteButton;
        
        //cycle through all elements For in attempt
        /*for (task in this.taskListChildren)
        {
        
            taskListItem = task;
        checkBox = task.getElementsByTagName("input")[0];
        deleteButton = task.getElementsByTagName("button")[0];

        //bind event listeners
        checkBox.onclick = this.completeTask.bind(this, task, checkBox);
        deleteButton.onclick = this.deleteTask.bind(this, task);
        } */

        for (let i = 0; i < this.taskListChildren.length; i++)
        {
            taskListItem = this.taskListChildren[i];
            checkBox = taskListItem.getElementsByTagName("input")[0];
            deleteButton = taskListItem.getElementsByTagName("button")[0];

            //bind event listeners
            checkBox.onclick = this.completeTask.bind(this, taskListItem, checkBox);
            deleteButton.onclick = this.deleteTask.bind(this, i);
        }
    },

    deleteTask: function(i)
    {
        this.taskListChildren[i].remove();
        this.scanTaskList();
    },

    completeTask: function(taskListItem, checkBox)
    {
        if(checkBox.checked)
        {
            taskListItem.className = "task_completed";
        }
        else
        {
            this.incompeteTask(taskListItem);
        }
        
    },

    incompeteTask: function(taskListItem)
    {
        taskListItem.className = "task";
    }

};





// //enters the actual value and displays to HTML
// function enter()
// {
//     if(input !== "")
//     {
        

//         const item = input.value;
//         if(item)
//         {
//             let thingToDo = new Todo(item, idNumber)
//             addItem(thingToDo);
//             list.push(thingToDo);
//             console.log(`item: ${thingToDo.toDo} and the index is-${thingToDo.id}`)
//         }

//         idNumber++;
//     }
//     document.getElementById('input').value = '';
//     document.getElementById("input").focus();

    
// }


// function addItem(item)
// {
//     //let status = item.completed == false ?  : ''
//     //Get class names from HTML

    

//     const toDoItem = `<li class="item" >
//                     <i class="${item.icon}" id="icon"></i>
//                     <p class="text"> ${item.toDo}</p>
//                     <i class="fas fa-times-circle"</i>
//                     </li>`

// theList.insertAdjacentHTML("beforeend", toDoItem);
// }

