import { computed, ref } from 'vue';
import {
  getTodosFromLocalStorage,
  setTodoLocalStorage,
} from './useLocalStorage';

export const useTodos = () => {
  const todos = ref(getTodosFromLocalStorage());
  const current = ref('all');

  const computedTodos = computed(() => {
    const filteredTodos =
      current.value === 'all'
        ? todos.value
        : todos.value.filter((todo) => todo.completed);

    return [...filteredTodos].sort((a, b) => {
      return Number(a.completed) - Number(b.completed);
    });
  });

  const completedCount = computed(() => {
    return todos.value.filter((todo) => todo.completed).length;
  });

  const remainingCount = computed(() => {
    return todos.value.length - completedCount.value;
  });

  const updateTab = (tab) => {
    current.value = tab;
  };

  const addTodo = (inputMsg) => {
    todos.value.push({
      id: new Date().getTime(),
      msg: inputMsg.trim(),
      completed: false,
      editable: false,
    });
    setTodoLocalStorage(todos.value);
  };

  const deleteTodo = (id) => {
    todos.value = todos.value.filter((todo) => todo.id !== id);
    setTodoLocalStorage(todos.value);
  };

  const updateTodo = (id) => {
    todos.value = todos.value.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo,
    );
    setTodoLocalStorage(todos.value);
  };

  const editTodo = (item, newMsg) => {
    todos.value = todos.value.map((todo) => {
      return todo.id === item.id ? { ...todo, msg: newMsg.trim() } : todo;
    });
    setTodoLocalStorage(todos.value);
  };

  return {
    todos,
    current,
    computedTodos,
    completedCount,
    remainingCount,
    updateTab,
    addTodo,
    deleteTodo,
    updateTodo,
    editTodo,
  };
};
