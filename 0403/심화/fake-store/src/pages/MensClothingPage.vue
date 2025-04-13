<template>
  <div>
    <h2>남성의류</h2>
    <ProductList :products="states.products" />
  </div>
</template>

<script setup>
import { get } from '@/api/product';
import ProductList from '@/components/layouts/ProductList.vue';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();

const states = reactive({
  products: [],
});

const getProducts = async () => {
  const currentCategory = `${currentRoute.name}`;
  const products = await get(`category/${currentCategory}`);
  if (products) {
    states.products = products;
  }
};

onMounted(() => {
  getProducts();
});
</script>

<style></style>
