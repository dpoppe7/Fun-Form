// This class holds all function related to rendering and non-data event handling

export const updateInitialUI = () => {
    // Update header, hide/show modal
    const savedUsername = localStorage.getItem('userName');
    const nameModal = document.getElementById('nameModal');
    
    const helloTitle = document.getElementById('hello-title');
    const header = document.querySelector('header');
    const nav = document.querySelector('.nav');
    const mainLayout = document.querySelector('.main-layout');

    if (!savedUsername) {
        // show modal: add .actve-modal containing (display: flex) to display modal content
        nameModal.classList.add('active-modal'); 

        // hide header and dashboard content
        header.classList.add('hidden');
        nav.classList.add('hidden');
        mainLayout.classList.add('hidden');
    }
    else {
        helloTitle.textContent = `Hello, ${savedUsername}!`;
        header.classList.remove('hidden');
        nameModal.classList.remove('active-modal'); 
        nav.classList.remove('hidden');
        mainLayout.classList.remove('hidden');
        updateViewNav('home'); //defailt view
    }
}

export const updateViewNav = (viewName) => {
    const allNavIcons = document.querySelectorAll('.nav-icon');
    const allViewSections = document.querySelectorAll('.main-content section'); 
   
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

/**
 * Handles the name submission and triggers a callback upon success.
 * @param {function} callback - The function to execute after saving the name.
 */
export const handleNameSubmission = (callback) => {
    const userNameInput = document.querySelector('#nameInput');
    const userName = userNameInput.value.trim();

    if (userName) {
        // save userName to localStorage
        localStorage.setItem('userName', userName);
        if (typeof callback === 'function') {
            callback(); 
        }
    }
    else {
        // give feedback
        userNameInput.placeholder = "Please enter a name."
    }
}