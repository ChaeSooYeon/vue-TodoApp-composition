<script setup>
defineProps({
  current: {
    type: String,
    default: 'all',
  },
});

const emit = defineEmits(['update-tab']);

const tabs = [
  { label: '전체', value: 'all' },
  { label: '완료', value: 'completed' },
];

const updateTab = (tab) => {
  emit('update-tab', tab);
};
</script>

<template>
  <ul class="tabs u-segmented">
    <li
      v-for="tab in tabs"
      :key="tab.value"
      class="u-segmented-item"
      :class="{ 'u-segmented-active': current === tab.value }"
      @click="updateTab(tab.value)"
    >
      {{ tab.label }}
    </li>
  </ul>
</template>

<style scoped>
.tabs {
  margin-top: 18px;
  font-size: 0.95rem;
}

@media (max-width: 480px) {
  .tabs {
    font-size: 0.9rem;
  }
}
</style>
