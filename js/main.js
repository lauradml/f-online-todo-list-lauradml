'use strict';


const list = document.querySelector('.list');
const addButton = document.querySelector('.add-button');
const inputTask = document.querySelector('.imput-task');
const modal = document.querySelector('.modal');
const plus = document.querySelector('.container-plus');


let tasks = [];

let newTask = {
    checked: false,
    value: '',
    order: ''
};

function printTasks(){
    list.innerHTML = '';
    if(JSON.parse(localStorage.getItem('tasks'))){
      tasks = JSON.parse(localStorage.getItem('tasks'))
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
            // taskInput.addEventListener('change', positionTasks);
            if(tasks[i].checked === true){
                newTask.classList.add('cross-out');
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

function reorder(){
    tasks.map((item, order) => {
        return item.order = order;
    });
}

function saveLocalStorage(){
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

modal.classList.add('closed');
function toggle() {
  if (modal.classList.contains('closed')) {
    modal.classList.remove('closed');
    plus.classList.add('closed')
  } else {
    modal.classList.add('closed');
    plus.classList.remove('closed')
  }
}

function functionsTasks(){
    tasks.unshift(newTask);
    saveLocalStorage();
    printTasks();
    reorder();
    toggle()
}

// function positionTasks(e){
//     const id = e.target.id;
//     const item = tasks[id];
//     if(item.checked === false){
//         const possition = tasks.length;
//         item.checked = true;
//         item.insertAdjacentHTML('beforebegin',possition);
//         reorder();
//         saveLocalStorage();
//         printTasks();
//     } else {
//         item.checked = false;
//         tasks.
//         reorder();
//         saveLocalStorage();
//         printTasks();
//     }
// }

addButton.addEventListener('click', functionsTasks);
inputTask.addEventListener('change', writeTasks);
plus.addEventListener('click', toggle);
