<template>
  <router-link
    class="btn btn-primary float-end"
    :to="{
      path: '/product/write',
      query: { category: currentCategory },
    }"
  >
    <i class="fa-solid fa-plus"></i>
    상품 등록
  </router-link>
</template>

<script setup>
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const currentCategory = currentRoute.name;
console.log('currentCategory', currentCategory);
</script>

<style></style>
