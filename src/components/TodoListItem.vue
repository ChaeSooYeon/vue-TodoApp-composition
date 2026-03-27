<script setup>
import { ref } from 'vue';

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
});

const emit = defineEmits(['delete-todo', 'update-todo', 'edit-todo']);

const newMsg = ref('');
const isEditing = ref(false);

const deleteTodo = () => {
  emit('delete-todo', props.item.id);
};

const updateTodo = () => {
  emit('update-todo', props.item.id);
};

const editTodo = () => {
  emit('edit-todo', props.item, newMsg.value);
  isEditing.value = false;
  newMsg.value = '';
};

const toggleEditTodo = () => {
  if (isEditing.value) {
    isEditing.value = false;
    newMsg.value = '';
    return;
  }

  isEditing.value = true;
  newMsg.value = props.item.msg;
};
</script>

<template>
  <div class="item u-card u-card-hover" :class="{ 'item-done': item.status === 'done' }">
    <input
      type="checkbox"
      :id="`chk${item.id}`"
      :checked="item.status === 'done'"
      @click="updateTodo"
    />
    <label :for="`chk${item.id}`" class="checkbox-label"></label>
    <span v-if="!isEditing" class="item-text">{{ item.msg }}</span>
    <input
      v-else
      class="item-input u-input-surface"
      type="text"
      v-model="newMsg"
      @keydown.enter="editTodo"
    />
    <span
      v-if="!isEditing"
      class="icon-btn u-icon-btn material-symbols-outlined"
      @click="toggleEditTodo"
      >edit</span
    >
    <span
      v-else
      class="icon-btn u-icon-btn material-symbols-outlined"
      @click="editTodo"
    >
      check
    </span>
    <span
      class="icon-btn u-icon-btn delete-btn material-symbols-outlined"
      @click="deleteTodo"
      >delete</span
    >
  </div>
</template>

<style scoped>
.item {
  min-height: 68px;
  padding: 14px;
  border-radius: 14px;
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
  border-radius: 10px;
  background: rgba(241, 245, 255, 0.9);
  font-size: 1rem;
  color: var(--text-strong);
  border-color: rgba(36, 87, 245, 0.22);
}

.item-input:focus {
  background: #ffffff;
  border-color: rgba(36, 87, 245, 0.55);
}

.item input[type='checkbox'] {
  display: none;
}

.checkbox-label {
  display: inline-block;
  width: 24px;
  height: 24px;
  border: 2px solid rgba(148, 163, 184, 0.8);
  border-radius: 6px;
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
  box-shadow: 0 3px 8px rgba(15, 159, 119, 0.16);
}

.delete-btn {
  flex-shrink: 0;
  color: var(--danger);
}

.item-done {
  background: rgba(241, 245, 249, 0.9);
  border-color: rgba(200, 210, 224, 0.8);
}

.item-done .item-text {
  text-decoration: line-through;
  color: var(--text-soft);
}
</style>
