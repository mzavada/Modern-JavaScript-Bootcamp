// Get saved data from localStorage
function getSavedTodos() {
  // Grab data from Local Storage
  const dataTodos = localStorage.getItem('todos');

  if (dataTodos !== null) {
    // Push data from local storage into array
    return JSON.parse(dataTodos);
    // console.table(list);
  }
  return [];
}

// Save todos to localStorage
function saveTodos(list) {
  localStorage.setItem('todos', JSON.stringify(list));
}

// Remove note
function removeTodo(id) {
  const todoIndex = todos.findIndex(todo => todo.id === id);
  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
}

// Toggle completed value
function toggleTodo(id) {
  // Find todo with same ID
  const todo = todos.find(todo => todo.id === id);

  // Verify that todo with ID exists and then flip the value of completed
  if (todo !== undefined) {
    todo.completed = !todo.completed;
  }
}

// Get the DOM elements for an individual todo
function generateTodoDOM(todo) {
  // Create new list item
  const listItem = document.createElement('li');

  // Checkbox for list item
  const listItemCheckbox = document.createElement('input');
  listItemCheckbox.setAttribute('type', 'checkbox');
  // Set checkbox based on completed value
  listItemCheckbox.checked = todo.completed;

  // Add eventlistener to toggle completed value
  listItemCheckbox.addEventListener('change', () => {
    toggleTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  listItem.appendChild(listItemCheckbox);

  // Span for list item
  const listItemText = document.createElement('a');
  listItemText.setAttribute('href', `/todo-app/edit.html#${todo.id}`);
  listItemText.textContent = `${todo.text}`;
  listItem.appendChild(listItemText);

  // Button for list item
  const listItemButton = document.createElement('button');
  listItemButton.innerHTML = 'x';
  listItemButton.addEventListener('click', () => {
    removeTodo(todo.id);
    saveTodos(todos);
    renderTodos(todos, filters);
  });
  listItem.appendChild(listItemButton);

  return listItem;
}

// Update the DOM elements for the list summmary
function generateSummaryDOM(numberNotCompleted) {
  document.querySelector('#summaryText').textContent = `You have ${numberNotCompleted} todos yet to complete.`;
}

// Render application todos based on filters
function renderTodos(list, filter) {
  // Clear DOM elements
  document.querySelector('#listTodos').innerHTML = '';
  document.querySelector('#summaryText').textContent = '';

  // Filter list based on filter criteria
  // First filter based on any search text
  // Second filter based on whether hide completed checkbox is checked or if each item is completed or not
  const filteredList = list.filter(item => item.text.toLowerCase().includes(filter.text.toLowerCase()) && (!filters.hideCompleted || !item.completed));

  // Calculate number of incomplete todos and display statement
  const numberNotCompleted = filteredList.filter(item => !item.completed).length;

  // Add summary data to DOM
  generateSummaryDOM(numberNotCompleted);

  // Generate todo list and add to DOM
  filteredList.forEach((todo) => {
    document.querySelector('ul').appendChild(generateTodoDOM(todo));
  });
}
