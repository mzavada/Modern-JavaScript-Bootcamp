const todos = [{
  text: 'Learn JavaScript',
  completed: false,
}, {
  text: 'Workup Local Needs',
  completed: false,
}, {
  text: 'Perpare for Elders Meeting',
  completed: false,
}, {
  text: 'Sleep',
  completed: true,
}, {
  text: 'Brush teeth',
  completed: true,
}];

function deleteTodo(array, text) {
  const index = array.findIndex(todo => todo.text.toLowerCase() === text.toLowerCase());
  if (index > -1) {
    array.splice(index, 1);
  }
}

function removeCompleted(array) {
  let index = array.length - 1;

  while (index >= 0) {
    if (array[index].completed === true) {
      array.splice(index, 1);
    }
    index -= 1;
  }
}

function getThingsToDo(list) {
  return list.filter(item => !item.completed);
}

function sortTodos(list) {
  list.sort((a, b) => {
    if (!a.completed && b.completed) {
      return -1;
    }
    if (!b.completed && a.completed) {
      return 1;
    }
    return 0;
  });
}

sortTodos(todos);
console.log(todos);
console.log(todos[1].completed);

// console.log(getThingsToDo(todos))

// deleteTodo(todos, 'brush teeth')
// console.log(todos)
// removeCompleted(todos)
// console.log(todos)

// todos.splice(2, 1)

// todos.push("Go to Meeting")

// todos.shift()

// todos.forEach((item, index) => console.log(`${index + 1}. ${item}`))

// for (let i = 0; i <= todos.length - 1; i++) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }

// for (let i = todos.length - 1; i >= 0; i--) {
//     console.log(`${i + 1}. ${todos[i]}`)
// }
