// Select DOM elements
const tbxElement = document.querySelector('#tbxTodo');
const chbxElement = document.querySelector('#chbxCompleted');
const btnElement = document.querySelector('#removeTodo');

// Grab the ID from the URL
const todoID = location.hash.substring(1);

// Grab todos from localStorage
const todos = getSavedTodos();

// Find matching todo from localStorage array
const todo = todos.find(todo => todo.id === todoID);

// If no match is found redirect user to homepage
if (todo === undefined) {
  location.assign('/todo-app/index.html');
}

// Populate values into text fields
tbxElement.value = todo.text;
chbxElement.checked = todo.completed;

// Save changes as user updates the values in the textbox
tbxElement.addEventListener('input', (e) => {
  todo.text = e.target.value;
  saveTodos(todos);
});

// Save changes as checkbox changes
chbxElement.addEventListener('change', (e) => {
  todo.completed = e.target.checked;
  saveTodos(todos);
});

// Remove todo and redirect user to homepage
btnElement.addEventListener('click', (e) => {
  removeTodo(todo.id);
  saveTodos(todos);
  location.assign('/todo-app/index.html');
});
