const category_item = document.querySelector('.category-item'); 
const category_list_container = document.querySelector('#category-list');

category_list_container.addEventListener('click', e=>{
    if(e.target.tagName.toLowerCase() === 'li'){
        activeCategory(e.target.dataset.categoryId); 
    }
});
