<template>
  <div>
    <ProductItem
      v-for="product in props.products"
      :product="product"
      :key="product.id"
    />
    <ProductAddButton />
  </div>
</template>

<script setup>
import ProductAddButton from './ProductAddButton.vue';
import ProductItem from './ProductItem.vue';

const props = defineProps({
  products: {
    Type: Array,
    required: true,
  },
});
</script>

<style></style>
