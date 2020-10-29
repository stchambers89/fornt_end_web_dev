/**********************************
*           Task Class            *
**********************************/
class Task 
{
    constructor(task)
    {
        this.task = task;
        this.complete = false;
        this.trash = false;
        this.id = 0;
    }
}

let taskList = [];
let id = 0;

const clear = document.querySelector(".clear");
const list = document.getElementById("list");
const input = document.getElementById("input");

let check = "fa-check-circle";
let uncheck = "fa-circle-thin";
let line_through = "lineThrough";

/**********************************
*          Local Storage          *
**********************************/
let data = localStorage.getItem("TODO");
if(data)
{
    taskList = JSON.parse(data);
    id = taskList.length;
    loadList(taskList);
}

function loadList(array)
{
    array.forEach(function(item)
    {
        buildTask(item);
    });
}

// clear/reset local storage
clear.addEventListener("click", function()
{
    localStorage.clear();
    location.reload();
});


function buildTask(task)
{
    if(task.trash) {return;}

    const DONE = task.complete ? check : uncheck;
    const LINE = task.complete ? line_through : "";
    const item =    `<li class="item">
                        <i class="fa ${DONE} co" job="complete" id=${task.id}></i>
                        <p class="text ${LINE}">${task.task}</p>
                        <i class="fa fa-trash-o de" job="delete" id=${task.id}></i>
                    </li>`;
    list.insertAdjacentHTML("beforeend", item);
}

document.addEventListener("keyup", function(event)
{
    if(event.code == "Enter")
    {
        addTask();
    }
});

function addTask()
{
    
    const text = input.value;
    if(text)
    {
        let task = new Task(text);
        task.id = id;
        buildTask(task);
        taskList.push(task);
        localStorage.setItem("TODO", JSON.stringify(taskList));
        id++;
    }
    input.value = "";
}

/**********************************
*        Responsive Tasks         *
**********************************/
list.addEventListener("click", function(event)
{
    const task = event.target;
    const taskJob = task.attributes.job.value;

    if(taskJob == "complete")
    {
        completeToDo(task);
    }
    else if(taskJob == "delete")
    {
        removeToDo(task);
    }
    localStorage.setItem("TODO", JSON.stringify(taskList));
});

function completeToDo(task)
{
    task.classList.toggle(check);
    task.classList.toggle(uncheck);
    task.parentNode.querySelector(".text").classList.toggle(line_through);

    taskList[task.id].done = taskList[task.id].done ? false : true;
}

function removeToDo(task)
{
    task.parentNode.parentNode.removeChild(task.parentNode);

    taskList[task.id].trash = true;
}



