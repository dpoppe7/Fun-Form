const updateViewNav = (View) => {
    const navHome = document.getElementById('nav-home');
    const navCheckin = document.getElementById('nav-check-in');
    const navMonthly = document.getElementById('nav-monthly');
    const navProjects = document.getElementById('nav-projects');
    const navBookshelf = document.getElementById('nav-bookshelf');

    View == 'Home' ? navHome.classList.add('active-nav') : navHome.classList.remove('active-nav');
    View == 'Checkin' ? navCheckin.classList.add('active-nav') : navCheckin.classList.remove('active-nav');
    View == 'Monthly' ? navMonthly.classList.add('active-nav') : navMonthly.classList.remove('active-nav');
    View == 'Projects' ? navProjects.classList.add('active-nav') : navProjects.classList.remove('active-nav');
    View == 'Bookshelf' ? navBookshelf.classList.add('active-nav') : navBookshelf.classList.remove('active-nav');
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
    const navHome = document.querySelector('#nav-home');
    const navCheckin = document.querySelector('#nav-check-in');
    const navMonthly = document.querySelector('#nav-monthly');
    const navProjects = document.querySelector('#nav-projects');
    const navBookshelf = document.querySelector('#nav-bookshelf');

      navHome.addEventListener('click', () => updateViewNav('Home'));
    navCheckin.addEventListener('click', () => updateViewNav('Checkin'));
    navMonthly.addEventListener('click', () => updateViewNav('Monthly'));
    navProjects.addEventListener('click', () => updateViewNav('Projects'));
    navBookshelf.addEventListener('click', () => updateViewNav('Bookshelf'));

})


