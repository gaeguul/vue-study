<template>
  <div>
    <ProductItem
      v-for="product in props.products"
      :product="product"
      :key="product.id"
    />
  </div>
</template>

<script setup>
import ProductItem from './ProductItem.vue';

const props = defineProps({
  products: {
    Type: Array,
    required: true,
  },
});
</script>

<style></style>
