// Sample tasks for initial display
const initialTasks = ['Task 1', 'Task 2', 'Task 3'];

// Function to display tasks on page load
function displayTasks() {
    const taskList = document.getElementById('taskList');
    taskList.innerHTML = '';

    initialTasks.forEach(task => {
        const li = createTaskElement(task);
        taskList.appendChild(li);
    });
}

// Function to create a task element
function createTaskElement(taskText) {
    const li = document.createElement('li');
    li.className = 'task';
    
    const span = document.createElement('span');
    span.innerText = taskText;
    span.onclick = function() {
        editTask(span);
    };

    const deleteButton = document.createElement('button');
    deleteButton.innerText = 'Delete';
    deleteButton.onclick = function() {
        deleteTask(li);
    };

    li.appendChild(span);
    li.appendChild(deleteButton);

    return li;
}

// Function to add a new task
function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        const li = createTaskElement(taskInput.value);
        taskList.appendChild(li);
        taskInput.value = '';
    }
}

// Function to edit a task
function editTask(span) {
    const input = document.createElement('input');
    input.type = 'text';
    input.className = 'editInput';
    input.value = span.innerText;

    const updateButton = document.createElement('button');
    updateButton.innerText = 'Update';
    updateButton.onclick = function () {
        span.innerText = input.value;
        span.parentNode.removeChild(input);
        span.parentNode.removeChild(updateButton);
    };

    span.parentNode.appendChild(input);
    span.parentNode.appendChild(updateButton);
}

// Function to delete a task
function deleteTask(li) {
    const taskList = document.getElementById('taskList');
    taskList.removeChild(li);
}

// Display tasks on page load
displayTasks();
