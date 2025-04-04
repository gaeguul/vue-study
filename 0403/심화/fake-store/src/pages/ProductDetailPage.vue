<template>
  <div>
    <h2>{{ states.productDetail.title }}</h2>
    <div>
      <div>{{ states.productDetail.category }}</div>
      <div>${{ states.productDetail.price }}</div>
      <div>
        {{ states.productDetail.rating.rate }} ({{
          states.productDetail.rating.count
        }}명)
      </div>
    </div>
    <img class="rounded" :src="`${states.productDetail.image}`" alt="" />
    <p>
      {{ states.productDetail.description }}
    </p>
  </div>
</template>

<script setup>
import { get } from '@/api/product';
import { reactive } from 'vue';
import { useRoute } from 'vue-router';

const currentRoute = useRoute();
const states = reactive({
  productDetail: {},
});

const getProductDetail = async () => {
  const productDetail = await get(currentRoute.params.id);
  if (productDetail) {
    states.productDetail = productDetail;
  }
};

getProductDetail();
</script>

<style scoped>
img {
  height: 200px;
}
</style>
