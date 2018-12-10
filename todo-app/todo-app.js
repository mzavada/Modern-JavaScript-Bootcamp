const todos = getSavedTodos();

const filters = {
  text: '',
  hideCompleted: false,
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

  // Add new todo to array
  todos.push({
    id,
    text: e.target.elements.newTodoText.value,
    completed: false,
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
// #endregion
