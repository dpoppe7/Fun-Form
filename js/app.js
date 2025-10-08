const updateUI = () => {
    const savedUsername = localStorage.getItem('userName');
    const nameModal = document.getElementById('nameModal');
    const header = document.querySelector('header');
    const helloTitle = document.getElementById('hello-title');

    if (!savedUsername) {
        // show modal: add .actve-modal containing (display: flex) to display modal content
        nameModal.classList.add('active-modal'); 

        // hide header and dashboard content
        header.classList.add('hidden');
    }
    else {
        helloTitle.textContent = `Hello, ${savedUsername}!`;
        header.classList.remove('hidden');
        nameModal.classList.remove('active-modal'); 
    }
}

const handleNameSubmission = () => {
    const userNameInput = document.querySelector('#nameInput');
    const userName = userNameInput.value.trim();

    if (userName) {
        // save userName to localStorage
        localStorage.setItem('userName', userName);
        updateUI();
    }
    else {
        // give feedback
        userNameInput.placeholder = "Please enter a name."
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateUI();

    // Start Button Listener (Modal)
    const startBtn = document.querySelector('#saveNameBtn');
    startBtn.addEventListener('click', handleNameSubmission);
})


