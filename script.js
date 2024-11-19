// Get elements
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Function to add a new task
function addTask() {
  const taskText = taskInput.value.trim();

  if (taskText === '') {
    alert('Please enter a task!');
    return;
  }

  // Create list item
  const taskItem = document.createElement('li');

  // Task content
  const taskContent = document.createElement('span');
  taskContent.textContent = taskText;

  // Actions (Complete/Delete)
  const taskActions = document.createElement('div');
  taskActions.className = 'task-actions';

  const completeButton = document.createElement('button');
  completeButton.textContent = 'Complete';
  completeButton.addEventListener('click', () => {
    taskItem.classList.toggle('completed');
  });

  const deleteButton = document.createElement('button');
  deleteButton.textContent = 'Delete';
  deleteButton.addEventListener('click', () => {
    taskList.removeChild(taskItem);
  });

  taskActions.appendChild(completeButton);
  taskActions.appendChild(deleteButton);

  taskItem.appendChild(taskContent);
  taskItem.appendChild(taskActions);

  // Add to the list
  taskList.appendChild(taskItem);

  // Clear the input
  taskInput.value = '';
}

// Add event listeners
addTaskButton.addEventListener('click', addTask);
taskInput.addEventListener('keypress', (event) => {
  if (event.key === 'Enter') {
    addTask();
  }
});
