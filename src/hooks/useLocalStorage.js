export const getTodosFromLocalStorage = () => {
  const todos = JSON.parse(localStorage.getItem('todos'));
  return todos || [];
};

export const setTodoLocalStorage = (todos) => {
  localStorage.setItem('todos', JSON.stringify(todos));
};
