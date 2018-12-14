let todos = getSavedTodos();

const filters = {
  text: '',
  hideCompleted: false,
  sortBy: 'byEdited',
};

renderTodos(todos, filters);

// #region EVENT LISTNERS

// Filter todos based on search text
document.querySelector('#inputSearchText').addEventListener('input', (e) => {
  filters.text = e.target.value;
  renderTodos(todos, filters);
});

// Add new todo on submit
document.querySelector('#todoForm').addEventListener('submit', (e) => {
  // Prevent the default submit
  e.preventDefault();

  // Create unique ID for new todo
  const id = uuidv4();
  const timestamp = moment().valueOf();
  // Add new todo to array
  todos.push({
    id,
    text: e.target.elements.newTodoText.value,
    completed: false,
    createdAt: timestamp,
    updatedAt: timestamp,
  });

  // Add array to localStorage
  saveTodos(todos);

  // Redirect user to edit.html page with the ID of the latest todo that was just created above
  location.assign(`/todo-app/edit.html#${id}`);
});

// Hide all completed items
document.querySelector('#chbxHideCompleted').addEventListener('change', (e) => {
  filters.hideCompleted = e.target.checked;
  renderTodos(todos, filters);
});

// Listen for changes to the local storage and then update todo list accordingly
window.addEventListener('storage', (e) => {
  // Verify that key value matches the correct data
  if (e.key === 'todos') {
    // Parse the JSON value stored within new value
    todos = JSON.parse(e.newValue);

    // Re-render the list
    renderTodos(todos, filters);
  }
});

document.querySelector('#sortBy').addEventListener('change', (e) => {
  filters.sortBy = e.target.value;
  renderTodos(todos, filters);
});
// #endregion
