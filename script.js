document.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const usernameInput = document.getElementById('username');
    const setUsernameBtn = document.getElementById('setUsernameBtn');
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const taskCount = document.getElementById('taskCount');
    const themeToggleBtn = document.getElementById('themeToggleBtn');
    
    let darkMode = false;
    let tasks = [];

    // Set username
    setUsernameBtn.addEventListener('click', () => {
        const username = usernameInput.value.trim();
        if (username) {
            greeting.textContent = `Welcome, ${username}!`;
            usernameInput.value = '';
        }
    });

    // Update task count
    const updateTaskCount = () => {
        taskCount.textContent = `Total Tasks: ${tasks.length}`;
    };

    // Add task
    addTaskBtn.addEventListener('click', () => {
        const task = taskInput.value.trim();
        if (task) {
            tasks.push(task);
            renderTasks();
            taskInput.value = '';
            updateTaskCount();
        }
    });

    // Render tasks
    const renderTasks = () => {
        taskList.innerHTML = '';
        tasks.forEach((task, index) => {
            const li = document.createElement('li');
            li.textContent = task;
            li.innerHTML += `
                <span class="icon" onclick="markAsDone(${index})">&#10003;</span>
                <span class="icon" onclick="removeTask(${index})">&#10006;</span>
            `;
            taskList.appendChild(li);
        });
    };

    // Mark task as done
    window.markAsDone = (index) => {
        tasks.splice(index, 1);
        renderTasks();
        updateTaskCount();
    };

    // Remove task
    window.removeTask = (index) => {
        tasks.splice(index, 1);
        renderTasks();
        updateTaskCount();
    };

    // Toggle theme
    themeToggleBtn.addEventListener('click', () => {
        darkMode = !darkMode;
        document.body.classList.toggle('dark', darkMode);
        themeToggleBtn.textContent = darkMode ? 'Light Theme' : 'Dark Theme';
    });
});
