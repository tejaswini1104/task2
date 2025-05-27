// Contact Form Validation
document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const phone = document.getElementById('phone').value.trim();
  const address = document.getElementById('address').value.trim();

  if (!name || !email || !phone || !address) {
    alert('Please fill in all fields.');
    return;
  }

  if (!email.includes('@') || !email.includes('.')) {
    alert('Please enter a valid email.');
    return;
  }

  if (!/^[0-9]{10}$/.test(phone)) {
    alert('Phone number must be 10 digits.');
    return;
  }

  alert(`Form submitted successfully by ${name}`);
});

// To-Do List
function addTask() {
  const taskInput = document.getElementById('taskInput');
  const taskText = taskInput.value.trim();

  if (!taskText) {
    alert("Please enter a task.");
    return;
  }
  

  const taskDiv = document.createElement('div');
  taskDiv.className = 'todo-item';
  taskDiv.textContent = taskText;

  // Optional: click to remove task
  taskDiv.addEventListener('click', () => {
    taskDiv.remove();
  });

  document.getElementById('todoList').appendChild(taskDiv);
  taskInput.value = ''; // clear input field
}

