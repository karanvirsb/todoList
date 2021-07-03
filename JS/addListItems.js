const task_form = document.querySelector('#task-form');
const task_input = document.querySelector('#add-task');

const category_form = document.querySelector('#category-form');
const category_input = document.querySelector('#add-category');

task_form.addEventListener('submit', e=>{
    e.preventDefault();
    if(task_input?.value.trim() || selected_list_id === null){
    }
    else{
        createTask(task_input.value);
    }
    task_input.value = ''; 
});

category_form.addEventListener('submit', e=>{
    e.preventDefault();
    if(category_input?.value.trim()){
        categorys.push( createCategory(category_input.value));
        saveAndRender();  
    }
    category_input.value = ''; 
});