// Get saved data from localStorage
const getSavedTodos = () => {
  // Grab data from Local Storage
  const todosJSON = localStorage.getItem('todos');

  try {
    // Return parsed data from local storage into array unless null
    return todosJSON ? JSON.parse(todosJSON) : [];
  } catch (e) {
    console.log(e.message);
    return [];
  }
};

// Save todos to localStorage
const saveTodos = list => localStorage.setItem('todos', JSON.stringify(list));

// Remove note
const removeTodo = (id) => {
  const todoIndex = todos.findIndex(todo => todo.id === id);

  if (todoIndex > -1) {
    todos.splice(todoIndex, 1);
  }
};

// Toggle completed value
const toggleTodo = (id) => {
  // Find todo with same ID
  const todo = todos.find(todo => todo.id === id);

  // Verify that todo with ID exists and then flip the value of completed
  if (todo) {
    todo.completed = !todo.completed;
  }
};

// Create the DOM elements for an individual todo
const generateTodoDOM = (todo) => {
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

  // Cross out text if completed
  const decoration = todo.completed ? 'line-through' : 'none';
  listItemText.setAttribute('style', `text-decoration: ${decoration}`);

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
};

// Update the DOM elements for the list summmary
const generateSummaryDOM = (numberNotCompleted) => {
  document.querySelector('#summaryText').textContent = `You have ${numberNotCompleted} todos yet to complete.`;
};

const sortTodos = (list, sortBy) => {
  // Sort list by select option
  if (sortBy === 'alpha') {
    return list.sort((a, b) => {
      if (a.text.toUpperCase() < b.text.toUpperCase()) {
        return -1;
      }
      if (a.text.toUpperCase() > b.text.toUpperCase()) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy === 'byCreated') {
    return list.sort((a, b) => {
      if (a.createdAt > b.createdAt) {
        return -1;
      }
      if (a.createdAt < b.createdAt) {
        return 1;
      }
      return 0;
    });
  }
  if (sortBy === 'byEdited') {
    return list.sort((a, b) => {
      if (a.updatedAt > b.updatedAt) {
        return -1;
      }
      if (a.updatedAt < b.updatedAt) {
        return 1;
      }
      return 0;
    });
  }
  return list;
};

// Render application todos based on filters
const renderTodos = (list, filter) => {
  list = sortTodos(list, filter.sortBy);

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
};

// Update page elements on edit.html form
const updateEditElements = (todo) => {
  // Populate values into text fields
  tbxElement.value = todo.text;
  chbxElement.checked = todo.completed;
  spanCreatedAt.innerHTML = moment(todo.createdAt).fromNow();
  spanUpdatedAt.innerHTML = moment(todo.updatedAt).fromNow();
};
