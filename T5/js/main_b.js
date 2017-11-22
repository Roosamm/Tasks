'use strict';

// HTML contains element 'message'. This is used to show the server's response
// Select it and save it as a variable/object
const message = document.querySelector('#message');

// make function 'upload' which
// - prevents the form from sending
// - writes 'Upload in progress...' into 'message' element
// - selects the file input field
// - makes FormData -object and adds the file selected byt the user into the object
// - send the file to the same url as in task a by using fetch -method
// - when file upload is complete, writes server response to 'message' element
// function ends
const upload = (evt) => {

  evt.preventDefault();

  message.innerHTML = 'Uploading...';

  const input = document.querySelector('input[type="file"]');

  const data = new FormData();
  data.append('uploadableFile', input.files[0]);

  //Fetch connection settings
  const settings = {
    method: 'POST',
    //credentials: 'Allow-Access',
    body:data
  };

  fetch('http://10.114.32.38:8080/firstServlet/upload', settings).then((response) => {
    return response.json();

  }).then((json) => {
    console.log(json);
    message.innerHTML = json.src;
    document.querySelector("#jsonpic").src = json.src;
  });
}

// make an event listener which calls upload function when the form is submitted
document.querySelector("form").addEventListener('submit', upload);
