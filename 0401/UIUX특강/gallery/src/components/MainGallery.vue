<template>
  <main class="component-grid">
    <!-- 버튼 -->
    <section class="component-card">
      <h2>버튼</h2>
      <BaseButton variant="primary">primary</BaseButton>
      <BaseButton variant="outline">outline</BaseButton>
      <BaseButton variant="pill">Pill</BaseButton>
    </section>

    <!-- 알림창 -->
    <section class="component-card">
      <h2>알림창</h2>
      <BaseAlert variant="success">Success</BaseAlert>
      <BaseAlert variant="warning">Warning</BaseAlert>
      <BaseAlert variant="error">Error</BaseAlert>
    </section>

    <!-- 뱃지 -->
    <section class="component-card">
      <h2>뱃지</h2>
      <BaseBadge variant="success">Success</BaseBadge>
      <BaseBadge variant="number">1</BaseBadge>
    </section>
  </main>
</template>

<script setup>
import BaseAlert from './UI/BaseAlert.vue'
import BaseBadge from './UI/BaseBadge.vue'
import BaseButton from './UI/BaseButton.vue'
</script>
