'use strict';


const list = document.querySelector('.list');
const addButton = document.querySelector('.add-button');
const inputTask = document.querySelector('.imput-task');
let tasks = [];

let newTask = {
    checked: false,
    value: '',
    order: ''
};

function printTasks(){
    list.innerHTML = '';
    if(tasks){
        for(let i = 0; i < tasks.length; i++){
            const newTask = document.createElement('li');
            newTask.classList.add('tasks-item');
            const taskLabel = document.createElement('label');
            taskLabel.classList.add('label-task');
            taskLabel.setAttribute('for', tasks[i].order);
            taskLabel.innerHTML = tasks[i].value;
            const taskInput = document.createElement('input');
            taskInput.classList.add('input-task');
            taskInput.type = 'checkbox';
            taskInput.setAttribute('name', 'tasks');
            taskInput.setAttribute('id', tasks[i].order);
      
            if(tasks[i].checked === true){
                newTask.classList.add('.cross-out');
                taskInput.checked = true;
            }

            newTask.appendChild(taskInput);
            newTask.appendChild(taskLabel);
            list.appendChild(newTask);
        }
    }
}

printTasks();


function writeTasks(e){
    newTask.value = e.currentTarget.value;
}

function functionsTasks(){
    tasks.unshift(newTask);
    printTasks();

}



addButton.addEventListener('click', functionsTasks);
inputTask.addEventListener('change', writeTasks);
