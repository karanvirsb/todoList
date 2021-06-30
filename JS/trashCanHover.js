
addGlobalEventListener('mouseover', '.trash-can', e => {
    e.target.setAttribute('src','../Assets/open-trash-can.png'); 
});


addGlobalEventListener('mouseout', '.trash-can', e =>{
    e.target.setAttribute('src', '../Assets/trash-can.png');
});






