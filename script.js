document.addEventListener('DOMContentLoaded', function() {

    //making event listeners for the input field and buttons and paragraph field
    const usernameInput = document.getElementById('username');
    const saveButton = document.getElementById('save-btn');
    const clearButton = document.getElementById('clear-btn');
    const displayName = document.getElementById('display-name');

    //checking what has been entered by user and display it
    const inputtedName = localStorage.getItem('username');
    if (inputtedName){
        displayName.textContent = `Hello, ${inputtedName}`;
    }

    //function to save localstorage variable and show hello name text 
    function save(){    
        let username = usernameInput.value;
        if (username){
            localStorage.setItem('username', username);
            displayName.textContent = 'Hello, ' + username + '!';
        }
    }

    //function to clear localstorage variable and clear hello name text
    function clear(){
        localStorage.removeItem('username');
        displayName.textContent = '';
    }

    //When save button is clicked will apply save function
    saveButton.addEventListener('click', save);

    //when clear button is clicked will apply clear function
    clearButton.addEventListener('click', clear);

});   