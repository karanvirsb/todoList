const task_form = document.querySelector('#task-form');
const task_input = document.querySelector('#add-task');
const add_task_btn = document.querySelector('#add-task-btn');

const category_form = document.querySelector('#category-form');
const category_input = document.querySelector('#add-category');
const add_category_btn = document.querySelector('#add-category-btn');
const category_list = document.querySelector('#category-list');
const category_template = document.querySelector('#category-template').content.cloneNode(true);  

task_form.addEventListener('submit', e=>{
    e.preventDefault();
    task_input?.value.trim() ? addTo(task_input.value, task_parent_id): '';  
    task_input.value = ''; 
});

category_form.addEventListener('submit', e=>{
    e.preventDefault();
    if(category_input?.value.trim())
        addToCategory(category_input.value); 
    category_input.value = ''; 
});

function addToCategory(value){
    const li = document.createElement('li');
    li.className = 'category-item';

    const category_temp = category_template.cloneNode(true); 
    category_temp.querySelector('#category-name').innerHTML = value; 

    li.appendChild(category_temp);
    category_list.appendChild(li); 
}


