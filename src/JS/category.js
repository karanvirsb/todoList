const category_item = document.querySelector('.category-item'); 
const category_list_container = document.querySelector('#category-list');
const remove_all_categories = document.querySelector('#clearBtn'); 

category_list_container.addEventListener('click', e=>{
    const element = e.target; 
    const elementTag = element.tagName.toLowerCase();
    switch(elementTag){
        case 'li':
            activeCategory(element.dataset.categoryId);
            renderCounts(); 
            break;
        case 'p':
            activeCategory(element.parentElement.dataset.categoryId);
            renderCounts(); 
            break; 
    }
});

remove_all_categories.addEventListener('click', () => {
    // get the modal calculate for yes then delete all otherwise do not delete anything
    removeAllCategories();
    saveAndRender(); 
});
