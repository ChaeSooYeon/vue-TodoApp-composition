<script setup>
import { useTodos } from './hooks/useTodos';

//Components
import TodoInput from './components/TodoInput.vue';
import TodoHeader from './components/TodoHeader.vue';
import TodoList from './components/TodoList.vue';

const {
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
} = useTodos();
</script>
<template>
  <div class="app-shell">
    <TodoHeader
      :current="current"
      :total="todos.length"
      :completed="completedCount"
      :remaining="remainingCount"
      @update-tab="updateTab"
    />
    <TodoList
      :todos="computedTodos"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />
    <TodoInput @add-todo="addTodo" />
  </div>
</template>

<style scoped>
.app-shell {
  width: 100%;
  max-width: 720px;
  padding: 24px;
  border-radius: 28px;
  border: 1px solid var(--card-border);
  background: var(--card-bg);
  box-shadow: var(--shadow-lg);
  backdrop-filter: blur(18px);
}

@media (max-width: 480px) {
  .app-shell {
    width: 100%;
    min-height: calc(100vh - 28px);
    padding: 20px;
    border-radius: 24px;
  }
}
</style>
