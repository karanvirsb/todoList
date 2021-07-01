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

    if(confirm(`Are you sure you want to remove this ${e.target}`))
        remove_item.remove(); 
        renderCounts();
});