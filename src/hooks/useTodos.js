import { computed, ref } from 'vue';
import {
  getTodosFromLocalStorage,
  setTodoLocalStorage,
} from './useLocalStorage';

const TODO_STATUS = {
  progress: 'progress',
  done: 'done',
};

export const useTodos = () => {
  const todos = ref(getTodosFromLocalStorage());
  const current = ref('all');

  const computedTodos = computed(() => {
    const filteredTodos =
      current.value === 'all'
        ? todos.value
        : todos.value.filter((todo) => todo.status === current.value);

    return [...filteredTodos].sort((a, b) => {
      return Number(a.status === TODO_STATUS.done) - Number(b.status === TODO_STATUS.done);
    });
  });

  const completedCount = computed(() => {
    return todos.value.filter((todo) => todo.status === TODO_STATUS.done).length;
  });

  const remainingCount = computed(() => {
    return todos.value.length - completedCount.value;
  });

  const updateTab = (tab) => {
    current.value = tab;
  };

  const addTodo = (inputMsg) => {
    const trimmedMsg = inputMsg.trim();
    if (!trimmedMsg) return;

    todos.value.push({
      id: new Date().getTime(),
      msg: trimmedMsg,
      status: TODO_STATUS.progress,
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
      todo.id === id
        ? {
            ...todo,
            status:
              todo.status === TODO_STATUS.done
                ? TODO_STATUS.progress
                : TODO_STATUS.done,
          }
        : todo,
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
