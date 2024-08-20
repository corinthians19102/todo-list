
document.addEventListener('DOMContentLoaded', () => {
    const addTaskButton = document.getElementById('addTaskButton');
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');

    addTaskButton.addEventListener('click', () => {
        if (taskInput.value.trim() !== '') {
            const li = document.createElement('li');
            li.innerHTML = `
                <span class="task-text">${taskInput.value}</span>
                <button class="edit-btn">&#9998;</button>
                <button class="delete-btn">🗑️</button>
            `;
            taskList.appendChild(li);
            taskInput.value = '';

            // Add event listeners for edit and delete buttons
            li.querySelector('.edit-btn').addEventListener('click', (e) => {
                const taskText = e.target.previousElementSibling;
                const newTask = prompt('Edite a tarefa:', taskText.textContent);
                if (newTask !== null && newTask.trim() !== '') {
                    taskText.textContent = newTask;
                }
            });

            li.querySelector('.delete-btn').addEventListener('click', () => {
                taskList.removeChild(li);
            });
        }
    });
});
