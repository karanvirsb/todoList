const task_form = document.querySelector('#task-form');
const task_input = document.querySelector('#add-task');
const add_task_btn = document.querySelector('#add-task-btn');

const category_input = document.querySelector('#add-category');
const add_category_btn = document.querySelector('#add-category-btn');

task_form.addEventListener('submit', e=>{
    e.preventDefault();
    addTo(task_input.value, task_parent_id); 
    task_input.value = ''; 
});

