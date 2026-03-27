<script setup>
defineProps({
  current: {
    type: String,
    default: 'all',
  },
  total: {
    type: Number,
    default: 0,
  },
  completed: {
    type: Number,
    default: 0,
  },
  remaining: {
    type: Number,
    default: 0,
  },
});

const emit = defineEmits(['update-tab']);

const updateTab = (tab) => {
  emit('update-tab', tab);
};
</script>

<template>
  <div class="todo__title">
    <p class="todo__eyebrow">Daily Planner</p>
    <h1 class="todo__text">Today&apos;s Focus</h1>
    <p class="todo__subtitle">
      남은 할 일 {{ remaining }}개, 완료 {{ completed }}개
    </p>
    <div class="todo__summary">
      <div class="todo__summary-card">
        <span class="todo__summary-label">전체</span>
        <strong class="todo__summary-value">{{ total }}</strong>
      </div>
      <div class="todo__summary-card">
        <span class="todo__summary-label">완료</span>
        <strong class="todo__summary-value">{{ completed }}</strong>
      </div>
      <div class="todo__summary-card">
        <span class="todo__summary-label">진행 중</span>
        <strong class="todo__summary-value">{{ remaining }}</strong>
      </div>
    </div>
    <ul class="todo__tab">
      <li
        :class="{ 'todo__tab--active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        :class="{ 'todo__tab--active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
  </div>
</template>
