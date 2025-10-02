function addTask() {
    const input = document.getElementById('taskInput');
    const taskText = input.value.trim();
    
    if (taskText === '') {
        alert('Please enter a task!');
        return;
    }
    
    const taskList = document.getElementById('taskList');
    const li = document.createElement('li');
    li.className = 'task-item';
    
    const span = document.createElement('span');
    span.className = 'task-text';
    span.textContent = taskText;
    span.onclick = function() {
        li.classList.toggle('completed');
    };
    
    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = 'Delete';
    deleteBtn.onclick = function() {
        taskList.removeChild(li);
    };
    
    li.appendChild(span);
    li.appendChild(deleteBtn);
    taskList.appendChild(li);
    
    input.value = '';
}

document.getElementById('taskInput').addEventListener('keypress', function(e) {
    if (e.key === 'Enter') {
        addTask();
    }
});
