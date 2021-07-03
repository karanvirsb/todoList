const category_item = document.querySelector('.category-item'); 
const category_list_container = document.querySelector('#category-list');

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
