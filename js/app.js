
function saveUsername() {
    const userName = document.querySelector('#nameInput').value;
    localStorage.setItem('userName', userName);
}

const savedUsername = localStorage.getItem('userName');
const nameModal = document.getElementById('nameModal');
const header = document.querySelector('header');

// display modal if no user name saved
if (!savedUsername) {
    // hide header and dashboard content
    header.classList.add('hidden');

    // add .actve-modal containing (display: flex) to element to display modal content
    nameModal.classList.add('active-modal'); 
}
else {
    header.classList.remove('hidden');
    nameModal.classList.remove('active-modal'); 
}

const modalNameinput =  document.querySelector('#nameInput');
const saveNameButton =  document.querySelector('#saveNameBtn');

saveNameButton.addEventListener('click', () => {
    if (modalNameinput.value) {
        saveUsername();
        header.classList.remove('hidden');
        nameModal.classList.remove('active-modal');
    }
})


