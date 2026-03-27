<script setup>
import TodoSummary from './TodoSummary.vue';
import TodoTabs from './TodoTabs.vue';

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
  <div class="header">
    <p class="eyebrow">Daily Planner</p>
    <h1 class="title">Today&apos;s Focus</h1>
    <p class="subtitle">
      남은 할 일 {{ remaining }}개, 완료 {{ completed }}개
    </p>
    <TodoSummary
      :total="total"
      :completed="completed"
      :remaining="remaining"
    />
    <TodoTabs :current="current" @update-tab="updateTab" />
  </div>
</template>

<style scoped>
.header {
  padding-bottom: 18px;
  border-bottom: 1px solid var(--line);
}

.eyebrow {
  margin-bottom: 8px;
  color: var(--accent);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
}

.title {
  font-size: 2rem;
  line-height: 1;
  letter-spacing: -0.04em;
}

.subtitle {
  margin-top: 10px;
  color: var(--text-body);
  font-size: 0.98rem;
}

@media (max-width: 480px) {
  .title {
    font-size: 1.7rem;
  }
}
</style>
