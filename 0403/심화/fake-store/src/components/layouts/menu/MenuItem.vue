<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="props.menu.url">
      <i :class="menu.icon"></i>
      {{ props.menu.title }}</router-link
    >
  </li>
</template>

<script setup>
const props = defineProps({
  menu: Object,
  required: true,
});
</script>
