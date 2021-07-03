

// finds the parent of the edit task and allows editing of the task 
addGlobalEventListener('click', '.edit-task', e=>{
    const task = e.target.parentElement;
    const taskInfo = task.querySelector('.task-information');
    taskInfo.setAttribute('contenteditable', 'true');
    taskInfo.focus();   
});

// if the user presses enter then the task is not editable and the user has entered what they wanted to
addGlobalEventListener('keydown', '.task-information', e=>{
    if(e.code === 'Enter'){
        const task = e.target.parentElement;
        const taskInfo = task.querySelector('.task-information').innerHTML;
        e.target.setAttribute('contenteditable', 'false');
        updateTask(taskInfo, task.dataset.taskId);
        saveAndRender(); 
    }
})

// If the user clicks off then the task is complete and not editable unless clicking the button 
addGlobalEventListener('focusout', '.task-information', e =>{
    const task = e.target.parentElement;
    const taskInfo = task.querySelector('.task-information').innerHTML;

    e.target.setAttribute('contenteditable', 'false'); 
    updateTask(taskInfo, task.dataset.taskId);
    saveAndRender();
    renderCounts(); 
})

// this is working on moving the task to the completed section 

addGlobalEventListener('click', '.task-checkboxes', e=>{
    const task = e.target.parentElement;
    
    if(task.parentElement.id === task_parent_id){
        createCompletedTask(task.dataset.taskId);
        saveAndRender();
        renderCounts();
    }
})


// This will restore the task back upto tasks from completed

// addGlobalEventListener('click', '.restore-task', e => {
//     const task = e.target.parentElement; 
//     const taskInfo = task.querySelector('.task-information').innerHTML.trim();

//     createTask(taskInfo); 
//     completedTask.removeChild(task);
//     renderCounts();
// });


