<!-- 
    사용자가 입력한 할 일 목록의 데이터는 todo에 저장되어 있다.
    상태(전체, 완료)에 따라 필터링된 목록데이터는
    coumputed 옵션 속성에서 정의한 todos 데이터에 저장된다.
    todos 데이터를 TodoList 컴포넌트에 전달한다.
    전달받은 todos 를 출력한다. 

-->
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

const deleteDoneTodos = () => {
  emit('delete-done-todos');
};

const actionMessage =
  props.current === 'progress'
    ? '진행중 탭에서는 삭제할 완료 항목이 없어요.'
    : '완료된 항목을 한 번에 정리할 수 있어요.';
</script>
<template>
  <div class="list">
    <div class="list-actions">
      <p class="list-caption">{{ actionMessage }}</p>
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
  justify-content: space-between;
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
