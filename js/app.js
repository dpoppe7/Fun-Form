import { TodoService } from './TodoService.js';
import * as UI from './appUI.js';

// Instantiate the service (this loads the data automatically)
const todoService = new TodoService();

// TESTING:
// making todoService accessible via the console.
window.todoService = todoService; 

// function that runs after initial name submission or on load
const updateAppUI = () => {
    // Hide/show modal insert initial username
    UI.updateInitialUI();

    // RENDER DASHBOARD COMPONENTS
    //UI.renderTodos(todoService.todos);

    //attach handlers
}

// funtion that handles the initial Start button after a user Name is submitter on Modal view
const handleStartSubmission = () => {
    // Callback function (function passed into another function)
    // UI.handleNameSubmission runs to completion -> then Call refreshUI (which updates the app's UI:hide/show modal and rest of dashboard)
    UI.handleNameSubmission(updateAppUI);
}

document.addEventListener('DOMContentLoaded', () => {
    // Initial UI setup
    updateAppUI();

    // Start Button Listener (Modal)
    const startBtn = document.querySelector('#saveNameBtn');
    startBtn.addEventListener('click', handleStartSubmission);

    // Navigation Listeners (Use delegation)
    const navIcons = document.querySelector('.nav-icons');
    navIcons.addEventListener('click', (event) => {
        const clickedIcon = event.target.closest('.nav-icon');

        if (clickedIcon) {
            const viewName = clickedIcon.dataset.view;

            if (viewName) {
                UI.updateViewNav(viewName);
            }
        }
    })
})