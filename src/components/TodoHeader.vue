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
  <div class="header">
    <p class="eyebrow">Daily Planner</p>
    <h1 class="title">Today&apos;s Focus</h1>
    <p class="subtitle">
      남은 할 일 {{ remaining }}개, 완료 {{ completed }}개
    </p>
    <div class="summary">
      <div class="summary-card u-card u-stat-card">
        <span class="summary-label">전체</span>
        <strong class="summary-value">{{ total }}</strong>
      </div>
      <div class="summary-card u-card u-stat-card">
        <span class="summary-label">완료</span>
        <strong class="summary-value">{{ completed }}</strong>
      </div>
      <div class="summary-card u-card u-stat-card">
        <span class="summary-label">진행 중</span>
        <strong class="summary-value">{{ remaining }}</strong>
      </div>
    </div>
    <ul class="tabs u-segmented">
      <li
        class="u-segmented-item"
        :class="{ 'u-segmented-active': current === 'all' }"
        @click="updateTab('all')"
      >
        전체
      </li>
      <li
        class="u-segmented-item"
        :class="{ 'u-segmented-active': current === 'completed' }"
        @click="updateTab('completed')"
      >
        완료
      </li>
    </ul>
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

.tabs {
  margin-top: 18px;
  font-size: 0.95rem;
}

@media (max-width: 480px) {
  .title {
    font-size: 1.7rem;
  }

  .summary {
    grid-template-columns: 1fr;
  }

  .tabs {
    font-size: 0.9rem;
  }
}
</style>
