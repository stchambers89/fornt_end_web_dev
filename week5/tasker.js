var toDoList = [];


//Define class
let tasker = 
{
    construct: function()
    {
        
        
       // loads on each need to check local storage for tasks, if empty run "normal"
        //if the todolist has items we need to read each item in the list and feed it to the create task function 
        if(typeof toDoList !== 'undefined' && toDoList.length > 0)
        {
            for(let item in todolist)
            {
                this.LoadTask(item.value)
            }
            this.selectElements();
            this.bindEvents();
            this.scanTaskList();
        }
        else //if(TodoList == empty)
        {
            this.selectElements();
            this.bindEvents();
            this.scanTaskList();
        }        
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
        taskListItem.setAttribute("class", "task");

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

    LoadTask: function(savedValue) 
    {
        //create blank variables
        let taskListItem, taskCheckbox, taskButton, taskTrash;

        //create the list item
        taskListItem = document.createElement("li");
        taskListItem.setAttribute("class", "task");

        //Create the checkbox
        taskCheckbox = document.createElement("input");
        taskCheckbox.setAttribute("type", "checkbox")

        // create the delete button
        taskButton = document.createElement("button");

        //create the X icon
        taskTrash = document.createElement("i");
        taskTrash.setAttribute("class", "fas fa-times-circle");

        //connect x Icon with delete button
        taskButton.appendChild(taskTrash);

        //connect elements to the list
        taskListItem.appendChild(taskCheckbox);
        taskListItem.appendChild(savedValue);
        taskListItem.appendChild(taskButton);

        //add actual task to the list
        this.taskList.appendChild(taskListItem); 
    },

    error: function()
    {
        this.errorMessage.style.display = "block";
    },

    saveLocal: function(task)
    {
        toDoList.push(task);
        console.log(`the recent task value is ${task}`);
        for(item in toDoList)
        {
            console.log(toDoList[item]);
        }
        
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
            this.saveLocal(taskValue)
            this.createTask();
            this.taskInput.value = "";
            this.scanTaskList();
            for(item in toDoList)
            {
                console.log(item.taskValue);
            }
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
        /*
            loop through todo list,
            {
             if( value == taskListChildren[i])
                remove item from the local storage list
            }
        */
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


