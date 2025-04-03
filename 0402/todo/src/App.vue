<template>
  <div>
    <DefaultLayout>
      <template v-slot:header> <Header /> </template>
      <template v-slot:navbar> <NavBar /> </template>
      <template v-slot:default> <RouterView /> </template>
    </DefaultLayout>
  </div>
</template>

<script setup>
import DefaultLayout from './components/layouts/DefaultLayout.vue';
import Header from './components/layouts/Header.vue';
import NavBar from './components/layouts/NavBar.vue';
</script>

<style scoped></style>
