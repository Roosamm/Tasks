
'use strict'

let formOK = 0;

const inputs = document.querySelectorAll('input');

const checkAttribute = (elements, attr, func) => {
    elements.forEach((element) => {
        if(element.hasAttribute(attr)){
            func(element);
        }
    } );
};

const checkEmpty = (element) => {
    if(element.value === ''){
        formOK++;
        //change border element to red
        element.setAttribute('style', 'border: red solid 1px');
        //modern browsers:
        //element.style = 'border: red solid 1px';
    } else {
        formOK--;
        element.removeAttribute('style');
    }
};

const checkPattern = (element) => {
    const Pattern = nre Reg Exp(element.getAttribute('Pattern'), 'i');
    const value = element.value;
    if (pattern.exec(value)){
        formOK++;
        element.setAttribute('style', 'border: green solid 1px');
    } else {
        formOK--;
        element.removeAttribute('style')
    }
};

const form = document.querySelector('form');
from.addEventListener('submit', (evt) => {
    evt.preventDefault();
    formOK = 0;
    checkAttribute(inputs, 'required', checkEmpty);
    checkAttribute(inputs, 'pattern', checkPattern);
    console.log(formOK);
    if(formOK === -8)
        form.submit();
});