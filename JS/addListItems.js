const task_form = document.querySelector('#task-form');
const task_input = document.querySelector('#add-task');

const category_form = document.querySelector('#category-form');
const category_input = document.querySelector('#add-category');

task_form.addEventListener('submit', e=>{
    e.preventDefault();
    if(task_input.value.trim() === '' || selected_list_id === 'null' || selected_list_id === null){
        task_input.value = '';
        displayModal('Invalid Input',`Either the category is not selected or the input is invalid please try again`);  
        return; 
    }
    else{
        createTask(task_input.value);
        task_input.value = ''; 
        saveAndRender();
        renderCounts();
    }
});

category_form.addEventListener('submit', e=>{
    e.preventDefault();
    if(category_input?.value.trim()){
        categorys.push( createCategory(category_input.value));
        saveAndRender(); 
    }
    category_input.value = ''; 
});