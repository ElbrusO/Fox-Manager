const form = document.querySelector('form');
const input = document.querySelector('#addInput');
const checklist = document.querySelector('.checklist');

form.addEventListener('submit', function(event) {
   event.preventDefault();

   const taskText = input.value.trim();

   if (taskText) {
      const newTask = document.createElement('li');
      newTask.className = 'task-li';
      newTask.textContent = taskText;

      checklist.appendChild(newTask);

      input.value = '';
      input.focus();
   }
});

