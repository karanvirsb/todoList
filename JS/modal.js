const modal_close = document.querySelector('#close-modal');
const modal_wrapper = document.querySelector('.modal-bg');
const modal = document.querySelector('#modal'); 
const yes_btn = document.querySelector('#yes-btn');
const no_btn = document.querySelector('#no-btn');
const modal_question = document.querySelector('#modal-question');
const modal_title = document.querySelector('#modal-title');

let modal_Value; 
let clicked = false; 

modal_close.addEventListener('click', closeModal);
modal_wrapper.addEventListener('click', closeModalOutside);


function getModalValue(){
    return modal_Value; 
}

function getClicked(){
    return clicked; 
}

function displayModal(modalHeader ,modalQuestion){
    modal_wrapper.style.display = 'block';
    modal_title.innerHTML = modalHeader;  
    modal_question.innerHTML = modalQuestion; 
}  

function closeModal(){
    modal_wrapper.style.display = 'none'; 
}

function closeModalOutside(){
    modal_wrapper.style.display = 'none'; 
}
