// Select DOM elements
const tbxElement = document.querySelector('#tbxTodo');
const chbxElement = document.querySelector('#chbxCompleted');
const btnElement = document.querySelector('#removeTodo');
const spanCreatedAt = document.querySelector('#createdAt');
const spanUpdatedAt = document.querySelector('#updatedAt');


// Grab the ID from the URL
const todoID = location.hash.substring(1);

// Grab todos from localStorage
let todos = getSavedTodos();

// Find matching todo from localStorage array
let todo = todos.find(todo => todo.id === todoID);

// If no match is found redirect user to homepage
if (!todo) {
  location.assign('/todo-app/index.html');
}

updateEditElements(todo);

// Save changes as user updates the values in the textbox
tbxElement.addEventListener('input', (e) => {
  todo.text = e.target.value;
  // Update timestamp for modified date
  todo.updatedAt = moment().valueOf();
  saveTodos(todos);
  updateEditElements(todo);
});

// Save changes as checkbox changes
chbxElement.addEventListener('change', (e) => {
  todo.completed = e.target.checked;
  // Update timestamp for modified date
  todo.updatedAt = moment().valueOf();
  saveTodos(todos);
  updateEditElements(todo);
});

// Remove todo and redirect user to homepage
btnElement.addEventListener('click', (e) => {
  removeTodo(todo.id);
  saveTodos(todos);
  location.assign('/todo-app/index.html');
});

// Listen to changes to the local storage
window.addEventListener('storage', (e) => {
  // Verify that key value is the correct key with the data you are watching
  if (e.key === 'todos') {
    // Parse the newValue field of the storage event
    todos = JSON.parse(e.newValue);

    // Find matching todo from localStorage array
    todo = todos.find(todo => todo.id === todoID);

    // If no match is found redirect user to homepage
    if (!todo) {
      location.assign('/todo-app/index.html');
    }

    // Populate values into text fields
    updateEditElements(todo);
  }
});
