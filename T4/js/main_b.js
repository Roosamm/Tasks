'use strict';

const message = document.querySelector('#message');

const upload = (evt) => {
    //prevents from sending
    evt.preventDefault();
    //Upload in progress
    message.innerHTML = 'Upload in progress...';
    //selects input field
    const input = docoment.querySelector('input[type="file"]');
    //makes FormData -object and adds the file selected by the
    const data = new FormData();
    data.append('fileup'), input.files[0]);
    // make an object for settings
    const settings = {
        method: 'POST',
        credentials: 'same-origin', // this might be needed for some servers
        body: data
    };
    // initiate fetch. In this example the server responds with json.
    // Response could also be text. Then you would use response.text()
    fetch('localhost:8080/WebApplication1/Upload', settings).then((response) => {
        return response.json();
    }).then((json) => {
        console.log(json);
    });
};

//make an event listener which calls upload function when the form is submitted
document.querySelector('form').addEventListener('submit', upload);