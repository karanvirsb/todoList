
const completedTasksSection = document.querySelector('#completed-tasks');
const tasksSection = document.querySelector('#tasks'); 
const tasksRemaining = document.querySelector('#tasks-left');
const taskCompleted = document.querySelector('#completed');
const taskRemainingName = document.querySelector('#task-remaining-name');

renderCounts();

function renderCounts(){
    taskRemaining();
    tasksCompleted();
}

function taskRemaining(){
    const taskLeft = tasksSection.children.length;
    if(taskLeft <= 1 ? taskRemainingName.innerText = 'Task' : taskRemainingName.innerText = 'Tasks')
    tasksRemaining.innerHTML = taskLeft; 
    console.log(taskLeft);
}

function tasksCompleted(){
    const taskComplete = completedTasksSection.children.length;
    taskCompleted.innerHTML = taskComplete; 
    console.log(taskComplete);
}