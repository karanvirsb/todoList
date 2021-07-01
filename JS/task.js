const completed_task_template = document.querySelector('.completed-template').content.children[0];
const task_template = document.querySelector('.task-template').content.children[0];

const completedTask = document.querySelector('#completed-tasks');
const tasks = document.querySelector('#tasks'); 

const task_parent_id = 'tasks'; 
const completed_parent_id = 'completed-tasks';

// finds the parent of the edit task and allows editing of the task 
addGlobalEventListener('click', '.edit-task', e=>{
    const task = e.target.parentElement;
    const taskInfo = task.querySelector('.task-information');
    taskInfo.setAttribute('contenteditable', 'true');
    taskInfo.focus();   
    console.log(taskInfo);
});

// if the user presses enter then the task is not editable and the user has entered what they wanted to
addGlobalEventListener('keydown', '.task-information', e=>{
    if(e.code === 'Enter'){
        e.target.setAttribute('contenteditable', 'false'); 
    }
})

// If the user clicks off then the task is complete and not editable unless clicking the button 
addGlobalEventListener('focusout', '.task-information', e =>{
    e.target.setAttribute('contenteditable', 'false'); 
})

// this is working on moving the task to the completed section 

addGlobalEventListener('click', '.task-checkboxes', e=>{
    const task = e.target.parentElement; 
    const taskLi = task.parentElement;  
    const taskInfo  = task.querySelector('.task-information').innerHTML.trim();
    
    if(taskLi.parentElement.id === task_parent_id){
        moveTo(taskInfo, completed_parent_id);
        tasks.removeChild(taskLi);
        renderCounts();
    }
})


// This will restore the task back upto tasks from completed

addGlobalEventListener('click', '.restore-task', e => {
    const task = e.target.parentElement;
    const taskLi = task.parentElement;  
    const taskInfo = task.querySelector('.task-information').innerHTML.trim();
    moveTo(taskInfo , task_parent_id); 
    completedTask.removeChild(taskLi);
    renderCounts();
});


function moveTo(taskDetails, section){

    const completeTemp = completed_task_template;
    const taskTemp = task_template;
    let li; 
    switch(section){
        case completed_parent_id: 

            li = makeTaskLi(['completed-item']);
            completeTemp.querySelector('.task-information').innerText = taskDetails; 
            li.appendChild(completeTemp)
            completedTask.appendChild(li);
            break;

        case task_parent_id:

            li = makeTaskLi(['task-item']);
            taskTemp.querySelector('.task-information').innerText = taskDetails;
            li.appendChild(taskTemp); 
            tasks.appendChild(li);
            break; 

        default:
            console.log(`There is no section named ${section}`)
            break; 
    }
   
}

function makeTaskLi(...arr){
    const li = document.createElement('li');
    arr.forEach(name => {
        li.classList.add(name); 
    });

    return li; 
}