<!-- 
     입력창에 할일을 입력하고 enter를 누르거나, 등록 버튼을 클릭했을때 입력한 내용이 저장되야 한다.
     1. 사용자가 어떤 가밧을 입력했는지 알기 위해서 데이터를 정의 해야 한다. 
     2. v-model 디렉티브 입력창과 양방향 데이터 바인딩을 처리해야 한다.
     3. 입력창에서 enter나 등록 버튼을 클릭하면 사용자가 어떤값을 입력했느지 확인 할 수 있도록
        이벤트를 등록하자 

-->
<script setup>
import { ref } from 'vue';

const inputMsg = ref('');
const emit = defineEmits(['addTodo']);

const addTodo = () => {
  emit('addTodo', inputMsg.value); // 부모 컴포넌트 이벤트 호출
  inputMsg.value = ''; // 입력 데이터 초기화
};
</script>
<template>
  <div class="input-bar u-card-muted">
    <input
      v-model="inputMsg"
      type="text"
      class="input-field u-input-surface"
      placeholder="할 일을 입력하세요."
      @keydown.enter="addTodo"
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
