<template>
  <nav class="navbar navbar-expand-sm navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
        <a class="fa-solid fa-house"></a>
        {{ config.title }}</a
      >
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <MenuGroup />
    </div>
  </nav>
</template>

<script setup>
import config from '@/config';
import MenuGroup from './menu/MenuGroup.vue';
</script>

<style></style>
