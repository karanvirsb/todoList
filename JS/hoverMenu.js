const menu_btn = document.querySelector('#menu');
const hover_over_div = document.querySelector('#hover-menu-open');
const side_menu = document.querySelector('#side-menu');
const main_wrapper = document.querySelector('.wrapper');
const close_btn = document.querySelector('#cancel'); 


menu_btn.addEventListener('click', () => {
    if(window.screen.width <= 411){
        side_menu.style.left = '0px'; 
        side_menu.style.width = '100vw'; 
        close_btn.style.left = '90vw';
    }else{
        side_menu.style.left = '0px'; 
        main_wrapper.style.transition = '0.5s ease-out';
        side_menu.style.transition = '0.5s ease-out';
        main_wrapper.style.marginLeft = '350px'; 
        close_btn.style.left = '305px';
    }
    
  
})

hover_over_div.addEventListener('mouseover', () => {
    setTimeout(() => {
        side_menu.style.left = '0px'; 
        hover_over_div.style.left = '-350px'; 
        main_wrapper.style.transition = '0.5s ease-out';
        side_menu.style.transition = '0.5s ease-out';
        main_wrapper.style.marginLeft = '350px'; 
    }, 350)
});

document.addEventListener('click', e => {
    const elem = e.target;

    if( elem.closest('.category-item') != null || elem.closest('#side-menu') != null || elem === menu_btn){
        return; 
    }else{
        side_menu.style.left = '-550px';
        hover_over_div.style.left = '0px';
        main_wrapper.style.transition = '0.5s ease-out';
        main_wrapper.style.marginLeft = ''; 
        close_btn.style.left = '-150px'; 
    } 
});
