'use strict';

const changeButton = document.querySelector('#change');

//select p-elements
const secondP = document.querySelector('p:nth-child(2)');

//create eventListeners
changeButton.addEventListener('click', (evt) => {
   //if secondP contains class red
    if(secondP.classList.contains('red')) {
        //replace it with 'blue'
        secondP.classList.replace('red', 'blue');
    } //replace it with 'red'
    else {
        secondP.classList.replace('blue', 'red');
    }
});
