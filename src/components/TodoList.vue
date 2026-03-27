<!-- 
    사용자가 입력한 할 일 목록의 데이터는 todo에 저장되어 있다.
    상태(전체, 완료)에 따라 필터링된 목록데이터는
    coumputed 옵션 속성에서 정의한 todos 데이터에 저장된다.
    todos 데이터를 TodoList 컴포넌트에 전달한다.
    전달받은 todos 를 출력한다. 

-->
<script setup>
import TodoListItem from './TodoListItem.vue';

const props = defineProps(['todos']);
const emit = defineEmits(['delete-todo', 'update-todo', 'edit-todo']);

const deleteTodo = (id) => {
  emit('delete-todo', id);
};

const updateTodo = (id) => {
  emit('update-todo', id);
};

const editTodo = (item, newMsg) => {
  emit('edit-todo', item, newMsg);
};
</script>
<template>
  <div class="list">
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
  text-align: center;
  border: 1px dashed rgba(148, 163, 184, 0.35);
  border-radius: 24px;
  color: var(--text-body);
  font-size: 0.98rem;
}

@media (max-width: 480px) {
  .list {
    height: auto;
    max-height: 46vh;
  }
}
</style>
