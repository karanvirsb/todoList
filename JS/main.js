
const LOCAL_STORAGE_CATEGORY_ID = 'category-list'; 
const LOCAL_STORAGE_CATEGORY_SELECTED_ID = 'selected-category';
let selected_list_id = localStorage.getItem(LOCAL_STORAGE_CATEGORY_SELECTED_ID);

let categorys = JSON.parse(localStorage.getItem(LOCAL_STORAGE_CATEGORY_ID)) || []; // if it exists give us the array otherwise give us an empty array 
const category_list = document.querySelector('#category-list');
const category_template = document.querySelector('#category-template').content.cloneNode(true);

const completed_task_template = document.querySelector('.completed-template');
const task_template = document.querySelector('.task-template');  

const task_parent_id = 'tasks'; 
const completed_parent_id = 'completed-tasks';

const completedTask = document.querySelector('#completed-tasks');
const tasks = document.querySelector('#tasks'); 

function render(){
    clearElements(category_list);
    clearElements(tasks)
    clearElements(completedTask);  
    categorys.forEach(item =>{  
        if(item.id === selected_list_id){
            addToCategory(item.name,item.id, true);
            renderTasks(item); 
            renderCompleted(item); 
        }
        else{
            addToCategory(item.name, item.id, false);
        }
    });  
}

function renderTasks(category){
    if(category.tasks === []){
        return;
    }
    category.tasks.forEach(task => {
        addTo(task.id, task.name, task_parent_id);
    });
}

function renderCompleted(category){
    if(category.complete === []){
        return; 
    }
    category.complete.forEach(task => {
        addTo(task.id,task.name,completed_parent_id);
    })
}

function saveAndRender(){
    save();
    render(); 
}

function save(){
    localStorage.setItem(LOCAL_STORAGE_CATEGORY_ID, JSON.stringify(categorys));
    localStorage.setItem(LOCAL_STORAGE_CATEGORY_SELECTED_ID, selected_list_id);    
}

function clearElements(element){
    while(element.firstChild){
        element.removeChild(element.firstChild); 
    }
}

function createCategory(value){
    return {id: Date.now().toString(), name: value, tasks: [], complete: []};
}

function findCategory(){
    return categorys.find(item => item.id === selected_list_id) || [];
}

function removeAllCategories(){
    categorys = []; 
}

function createTask(value){
    const task = {id: Date.now().toString(), name: value}
    const categoryTask = categorys.find(item => item.id === selected_list_id); 
    categoryTask.tasks.push(task);
}

function findTask(taskId){
    const categoryTask = findCategory(); 
    return categoryTask.tasks.find(item => item.id === taskId) || []; 
}

function removeTask(taskId){
    const categoryTask = findCategory(); 
    categoryTask.tasks = categoryTask.tasks.filter(item => item.id != taskId);
}

function updateTask(value, id){
    const categoryTask = findCategory();
    const task = findTask(id);
    task.name = value;  
}

function removeAllTasks(){
    const categoryTask = findCategory();
    categoryTask.tasks = [];
}

function createCompletedTask(taskId){
    const categoryTask = findCategory(); 
    const completed = findTask(taskId); 
    categoryTask.complete.push(completed); 
    removeTask(taskId); 
}

function removeCompletedTask(taskId){
    const categoryTask = findCategory();
    categoryTask.complete = categoryTask.complete.filter(item => item.id != taskId);
}

function removeAllCompletedTasks(){
    const categoryTask = findCategory();
    categoryTask.complete = [];
}


/** allows you to add event listeners globally event to dynamically added elements
 * @param  {string} type - type of event listen ex. 'click'
 * @param  {string} selector - is the element that is being selected ex. '.wrapper'
 * @param  {anonymous variabl} callback - This is what is being returned the target selected element
 */
function addGlobalEventListener(type ,selector, callback){
    document.addEventListener(type, e =>{
        if(e.target.matches(selector)){
            callback(e)
        }
    })
};

//This section focuses on the deletion of anyhting that has a trash-can to delete

addGlobalEventListener('click', '.trash-can', e=>{
    const remove_item = e.target.parentElement;
    console.log(remove_item.dataset.categoryId)
    if(confirm(`Are you sure you want to remove this ${e.target}`)){
        if(e.target.classList[0] === 'delete-category'){
            categorys = categorys.filter(item =>  item.id !== remove_item.dataset.categoryId)
            selected_list_id = categorys.length <= 1 ?  null : categorys[0].id;
            saveAndRender();
        } else{
            removeTask(remove_item.dataset.taskId);
            removeCompletedTask(remove_item.dataset.taskId); 
            saveAndRender(); 
        }
        remove_item.remove(); 
    }
    renderCounts(); 
});

function addTo(taskId, taskDetails, section){

    const completeTemp = completed_task_template.cloneNode(true);
    const taskTemp = task_template.cloneNode(true); 
 
    let li; 
    switch(section){
        case completed_parent_id: 
            li = makeTaskLi(['completed-item', 'task'], taskId);
            completeTemp.content.querySelector('.task-information').innerText = taskDetails; 
            li.append(completeTemp.content);   
            completedTask.appendChild(li);
            break;

        case task_parent_id:

            li = makeTaskLi(['task-item', 'task'], taskId);
            taskTemp.content.querySelector('.task-information').innerText = taskDetails;
            li.appendChild(taskTemp.content); 
            tasks.appendChild(li);
            break; 

        default:
            console.log(`There is no section named ${section}`)
            break; 
    }
   
}

function makeTaskLi(arr, taskId){
    const li = document.createElement('li');
    li.classList.add(...arr);
    li.dataset.taskId = taskId; 
    return li; 
}

function addToCategory(value, id, isActive){
    const li = document.createElement('li');
    li.className = 'category-item';
    li.dataset.categoryId = id; 
    if(isActive)
        li.classList.add('active'); 

    const category_temp = category_template.cloneNode(true); 
    category_temp.querySelector('#category-name').innerHTML = value; 

    li.appendChild(category_temp);
    category_list.appendChild(li); 
}

function activeCategory(listID){
    selected_list_id = listID;  
    saveAndRender(); 
}

render(); 