<template>
  <div class="d-flex">
    <img class="rounded" :src="`${props.product.image}`" alt="" />
    <router-link :to="`product/${props.product.id}`">
      <div>{{ props.product.title }}</div>
    </router-link>
  </div>
</template>

<script setup>
const props = defineProps({
  product: {
    Type: Object,
    required: true,
  },
});
</script>

<style scoped>
img {
  width: 50px;
  height: 50px;
}
</style>
