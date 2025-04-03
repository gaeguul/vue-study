<template>
  <h1>Axios 테스트</h1>
</template>

<script setup>
import axios from 'axios';

const requestApi = () => {
  const requestUrl = '/api/contacts';
  axios.get(requestUrl).then((response) => {
    console.log(response);
  });
};
requestApi();
</script>
