<template>
  <li class="nav-item">
    <a class="nav-link" aria-current="page" :href="props.menu.url">
      {{ props.menu.title }}</a
    >
  </li>
</template>

<script setup>
const props = defineProps({
  menu: Object,
  required: true,
});
</script>
