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
const emit = defineEmits([
  'delete-todo',
  'update-todo',
  'edit-todo',
  'toggleEditTodo',
]);

const newMsg = ref('');

const deleteTodo = (id) => {
  emit('delete-todo', id);
};
const updateTodo = (id) => {
  emit('update-todo', id);
};
const editTodo = (item) => {
  emit('edit-todo', item, newMsg.value);
};
const toggleEditTodo = (id, prvMsg) => {
  emit('toggle-edit-todo', id);
  newMsg.value = prvMsg;
};
</script>
<template>
  <div class="todo__list">
    <div
      v-for="item in props.todos"
      :key="item.id"
      class="todo__item"
      :class="{ 'todo__item--completed': item.completed }"
    >
      <input
        type="checkbox"
        :id="`chk${item.id.toString()}`"
        :checked="item.completed"
        @click="updateTodo(item.id)"
      />
      <label
        :for="`chk${item.id.toString()}`"
        class="todo__checkbox-label"
      ></label>
      <!-- editable -->
      <span v-if="!item.editable" class="todo__item-text">{{ item.msg }}</span>
      <input
        v-else-if="item.editable"
        class="todo__item-text--editable"
        type="text"
        v-model="newMsg"
        @keydown.enter="editTodo(item)"
      />
      <span
        v-if="!item.editable"
        class="btn material-symbols-outlined todo__edit-icon"
        @click="toggleEditTodo(item.id, item.msg)"
        >edit</span
      >
      <span
        v-else-if="item.editable"
        class="btn material-symbols-outlined"
        @click="editTodo(item)"
      >
        check
      </span>
      <span
        class="btn material-symbols-outlined todo__delete-icon"
        @click="deleteTodo(item.id)"
        >delete</span
      >
    </div>
    <div v-if="props.todos.length === 0" class="todo__item--no">
      <p>할 일이 없습니다.</p>
    </div>
  </div>
</template>
