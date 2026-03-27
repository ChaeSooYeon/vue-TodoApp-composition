<script setup>
import { ref } from 'vue';

const inputMsg = ref('');
const isComposing = ref(false);
const emit = defineEmits(['addTodo']);

const addTodo = () => {
  const trimmedMsg = inputMsg.value.trim();
  if (!trimmedMsg) return;

  emit('addTodo', trimmedMsg);
  inputMsg.value = ''; // 입력 데이터 초기화
};

const handleEnter = (event) => {
  if (isComposing.value || event.isComposing) return;
  addTodo();
};
</script>
<template>
  <div class="input-bar u-card-muted">
    <input
      v-model="inputMsg"
      type="text"
      class="input-field u-input-surface"
      placeholder="할 일을 입력하세요."
      @compositionstart="isComposing = true"
      @compositionend="isComposing = false"
      @keydown.enter.prevent="handleEnter"
    />
    <button class="submit-btn u-primary-btn" @click="addTodo">등록</button>
  </div>
</template>

<style scoped>
.input-bar {
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 14px;
  border-radius: 22px;
}

.input-field {
  flex-grow: 1;
  height: 48px;
  padding: 0 16px;
  font-size: 0.98rem;
}

.input-field::placeholder {
  color: #9aa3b2;
}

.submit-btn {
  flex-shrink: 0;
  height: 48px;
  padding: 0 18px;
  border-radius: 16px;
  font-size: 0.92rem;
  font-weight: 700;
}

@media (max-width: 480px) {
  .input-bar {
    padding: 12px;
  }
}
</style>
