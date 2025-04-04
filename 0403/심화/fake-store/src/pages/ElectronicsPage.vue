<template>
  <div>
    <h2>가전</h2>

    <div>
      <ProductList :products="states.products" />
    </div>
  </div>
</template>

<script setup>
import { get } from '@/api/product';
import ProductList from '@/components/layouts/ProductList.vue';
import { reactive } from 'vue';
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

getProducts();
</script>

<style></style>
