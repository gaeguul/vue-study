<template>
  <li class="nav-item">
    <router-link class="nav-link" :to="props.nav.uri">
      {{ props.nav.text }}
    </router-link>
  </li>
</template>

<script setup>
const props = defineProps({
  nav: {
    type: Object,
    required: true,
  },
});
</script>
