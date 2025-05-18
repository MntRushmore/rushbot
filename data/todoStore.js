const todos = []

function getTodos() {
  return todos
}

function addTodo(item) {
  todos.push(item)
}

function removeTodo(index) {
  if (index >= 0 && index < todos.length) {
    todos.splice(index, 1)
  }
}

module.exports = {
  getTodos,
  addTodo,
  removeTodo,
}