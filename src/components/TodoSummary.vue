<script setup>
defineProps({
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

const summaryItems = [
  { label: '전체', key: 'total' },
  { label: '진행 중', key: 'remaining' },
  { label: '완료', key: 'completed' },
];
</script>

<template>
  <div class="summary">
    <div
      v-for="item in summaryItems"
      :key="item.key"
      class="summary-card u-card u-stat-card"
    >
      <span class="summary-label">{{ item.label }}</span>
      <strong class="summary-value">{{ $props[item.key] }}</strong>
    </div>
  </div>
</template>

<style scoped>
.summary {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
  margin-top: 20px;
}

.summary-card {
  background: rgba(255, 255, 255, 0.7);
}

.summary-label {
  display: block;
  margin-bottom: 8px;
  color: var(--text-soft);
  font-size: 0.8rem;
}

.summary-value {
  font-size: 1.2rem;
  letter-spacing: -0.03em;
}

@media (max-width: 480px) {
  .summary {
    grid-template-columns: 1fr;
  }
}
</style>
