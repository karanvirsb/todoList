let task; 

// finds the parent of the edit task and allows editing of the task 
addGlobalEventListener('click', '.edit-task', e=>{
    task = e.target.parentElement;
    const taskInfo = task.children[1];
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

