
const allNavIcons = document.querySelectorAll('.nav-icon');
const allViewSections = document.querySelectorAll('.main-content section'); 
const updateViewNav = (viewName) => {
    //clear: remove active-nav class from all icons
    allNavIcons.forEach(icon => {
        icon.classList.remove('active-nav');
    })

    // add active-nav ui update class on corresponding clicked nav icon
    const activeIcon = document.querySelector(`[data-view ="${viewName}"]`);
    if (activeIcon) {
        activeIcon.classList.add('active-nav');
    }

    // update main content view to corresponding view
    const contentView = document.querySelector(`#view-${viewName}`);
    allViewSections.forEach(section => {
        section.classList.remove('active-view');
    })
    if (contentView) {
        contentView.classList.add('active-view');
    }
}

const updateInitialUI = () => {
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
        updateViewNav('home'); //defailt view
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
    updateInitialUI();

    // Start Button Listener (Modal)
    const startBtn = document.querySelector('#saveNameBtn');
    startBtn.addEventListener('click', handleNameSubmission);

    // Navigation Listeners
    const navIcons = document.querySelector('.nav-icons');
    navIcons.addEventListener('click', (event) => {
        const clickedIcon = event.target.closest('.nav-icon');

        if (clickedIcon) {
            const viewName = clickedIcon.dataset.view;

            if (viewName) {
                updateViewNav(viewName);
            }
        }
    })
})


