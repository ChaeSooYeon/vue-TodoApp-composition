<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps({
  todos: {
    type: Array,
    default: () => [],
  },
  current: {
    type: String,
    default: 'all',
  },
  completedCount: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits([
  'delete-todo',
  'delete-all-todos',
  'delete-done-todos',
  'update-todo',
  'edit-todo',
]);

const deleteTodo = (id) => {
  emit('delete-todo', id);
};

const updateTodo = (id) => {
  emit('update-todo', id);
};

const editTodo = (item, newMsg) => {
  emit('edit-todo', item, newMsg);
};

const deleteAllTodos = (id) => {
  emit('delete-all-todos', id);
};

const deleteDoneTodos = () => {
  emit('delete-done-todos');
};
</script>
<template>
  <div class="list">
    <div class="list-actions">
      <button
        class="clear-btn"
        type="button"
        :disabled="props.todos.length === 0"
        @click="deleteAllTodos"
      >
        전체 항목 삭제
      </button>
      <button
        class="clear-btn"
        type="button"
        :disabled="props.completedCount === 0 || props.current === 'progress'"
        @click="deleteDoneTodos"
      >
        완료 항목 삭제
      </button>
    </div>
    <TodoListItem
      v-for="item in props.todos"
      :key="item.id"
      :item="item"
      @delete-todo="deleteTodo"
      @update-todo="updateTodo"
      @edit-todo="editTodo"
    />
    <div v-if="props.todos.length === 0" class="empty-state u-card-muted">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>

<style scoped>
.list {
  margin: 20px 0 18px;
  padding: 4px 2px;
  height: min(52vh, 420px);
  overflow: auto;
  scrollbar-width: thin;
  scrollbar-color: rgba(148, 163, 184, 0.65) transparent;
}

.list-actions {
  display: flex;
  align-items: center;
  justify-content: end;
  gap: 12px;
  margin-bottom: 10px;
}

.list-caption {
  color: var(--text-body);
  font-size: 0.9rem;
}

.clear-btn {
  flex-shrink: 0;
  padding: 10px 14px;
  border: 1px solid rgba(148, 163, 184, 0.25);
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.75);
  color: var(--text-body);
  font: inherit;
  font-size: 0.88rem;
  font-weight: 600;
  cursor: pointer;
  transition:
    background-color 0.18s ease,
    color 0.18s ease,
    border-color 0.18s ease,
    transform 0.18s ease;
}

.clear-btn:hover:not(:disabled) {
  transform: translateY(-1px);
  border-color: rgba(221, 77, 99, 0.2);
  background: rgba(255, 244, 246, 0.96);
  color: var(--danger);
}

.clear-btn:disabled {
  cursor: not-allowed;
  opacity: 0.45;
}

.list::-webkit-scrollbar {
  width: 6px;
}

.list::-webkit-scrollbar-thumb {
  border-radius: 999px;
  background: rgba(148, 163, 184, 0.65);
}

.empty-state {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  max-height: 370px;
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  border-radius: 24px;
  color: var(--text-body);
  font-size: 0.98rem;
}

@media (max-width: 480px) {
  .list-actions {
    flex-direction: column;
    align-items: stretch;
  }

  .clear-btn {
    width: 100%;
  }

  .list {
    height: auto;
    max-height: 46vh;
  }
}
</style>
