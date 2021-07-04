const hover_over_div = document.querySelector('#hover-menu-open');
const side_menu = document.querySelector('.side-menu');
const main_wrapper = document.querySelector('.wrapper');


hover_over_div.addEventListener('mouseover', () => {
    setTimeout(() => {
        side_menu.style.left = '0px'; 
        hover_over_div.style.left = '-350px'; 
        main_wrapper.style.transition = '0.5s ease-out';
        main_wrapper.style.marginLeft = '350px'; 
    }, 350)
});

document.addEventListener('click', e => {
    const elem = e.target;

    if( elem.closest('.category-item') != null || elem.closest('.side-menu') != null){
        return; 
    }else{
        side_menu.style.left = '-350px';
        hover_over_div.style.left = '0px';
        main_wrapper.style.marginLeft = '';  
    } 
});
