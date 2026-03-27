<!-- 
    사용자가 입력한 할 일 목록의 데이터는 todo에 저장되어 있다.
    상태(전체, 완료)에 따라 필터링된 목록데이터는
    coumputed 옵션 속성에서 정의한 todos 데이터에 저장된다.
    todos 데이터를 TodoList 컴포넌트에 전달한다.
    전달받은 todos 를 출력한다. 

-->
<script setup>
import { ref } from 'vue';

const props = defineProps(['todos']);
const emit = defineEmits(['delete-todo', 'update-todo', 'edit-todo']);

const newMsg = ref('');
const editingId = ref(null);

const deleteTodo = (id) => {
  emit('delete-todo', id);
};
const updateTodo = (id) => {
  emit('update-todo', id);
};
const editTodo = (item) => {
  emit('edit-todo', item, newMsg.value);
  editingId.value = null;
  newMsg.value = '';
};
const toggleEditTodo = (item) => {
  if (editingId.value === item.id) {
    editingId.value = null;
    newMsg.value = '';
    return;
  }
  editingId.value = item.id;
  newMsg.value = item.msg;
};
</script>
<template>
  <div class="list">
    <div
      v-for="item in props.todos"
      :key="item.id"
      class="item u-card u-card-hover"
      :class="{ 'item-completed': item.completed }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label :for="`chk${item.id}`" class="checkbox-label"></label>
      <!-- editable -->
      <span v-if="editingId !== item.id" class="item-text">{{ item.msg }}</span>
      <input
        v-else
        class="item-input u-input-surface"
        type="text"
        v-model="newMsg"
        @keydown.enter="editTodo(item)"
      />
      <span
        v-if="editingId !== item.id"
        class="icon-btn u-icon-btn material-symbols-outlined"
        @click="toggleEditTodo(item)"
        >edit</span
      >
      <span
        v-else
        class="icon-btn u-icon-btn material-symbols-outlined"
        @click="editTodo(item)"
      >
        check
      </span>
      <span
        class="icon-btn u-icon-btn delete-btn material-symbols-outlined"
        @click="deleteTodo(item.id)"
        >delete</span
      >
    </div>
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

.item {
  min-height: 68px;
  padding: 14px;
  border-radius: 22px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin: 14px 0;
}

.item-text {
  flex-grow: 1;
  margin: 0 4px;
  color: var(--text-strong);
  font-size: 1rem;
  line-height: 1.45;
}

.item-input {
  flex-grow: 1;
  margin: 0 4px;
  padding: 10px 12px;
  border-radius: 14px;
  background: rgba(241, 245, 255, 0.9);
  font-size: 1rem;
  color: var(--text-strong);
  border-color: rgba(36, 87, 245, 0.22);
}

.item-input:focus {
  background: #ffffff;
  border-color: rgba(36, 87, 245, 0.55);
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

.item input[type='checkbox'] {
  display: none;
}

.checkbox-label {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid rgba(148, 163, 184, 0.8);
  border-radius: 8px;
  background: #ffffff;
  position: relative;
  flex-shrink: 0;
  cursor: pointer;
  transition:
    border-color 0.2s ease,
    background-color 0.2s ease,
    box-shadow 0.2s ease;
}

.item input[type='checkbox']:checked + .checkbox-label::after {
  content: '✔';
  color: #ffffff;
  font-size: 12px;
  width: 24px;
  height: 24px;
  text-align: center;
  position: absolute;
  left: 0;
  top: 0;
  line-height: 24px;
}

.item input[type='checkbox']:checked + .checkbox-label {
  border-color: var(--success);
  background: var(--success);
  box-shadow: 0 8px 16px rgba(15, 159, 119, 0.24);
}

.delete-btn {
  flex-shrink: 0;
  color: var(--danger);
}

.item-completed {
  background: rgba(241, 245, 249, 0.9);
  border-color: rgba(200, 210, 224, 0.8);
}

.item-completed .item-text {
  text-decoration: line-through;
  color: var(--text-soft);
}

@media (max-width: 480px) {
  .list {
    height: auto;
    max-height: 46vh;
  }
}
</style>
