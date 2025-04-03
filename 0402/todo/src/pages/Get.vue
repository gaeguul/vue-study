<template>
  <div>
    <h1 class="mt-4">Get</h1>
    <div class="mt-4">
      <h5>Todo ID 조회</h5>
      <div class="form-row">
        <input
          type="text"
          placeholder="검색할 ID를 입력하세요"
          v-model="id"
          class="form-control"
        />
        <button class="btn btn-primary" @click="getTodo">검색</button>
      </div>
    </div>
    <div class="mt-4">
      <h5>조회 결과</h5>
      <ul>
        <li>{{ state.todo.id }}</li>
        <li>{{ state.todo.todo }}</li>
        <li>{{ state.todo.desc }}</li>
        <li>{{ state.todo.done }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive, ref } from 'vue';
import { useRoute } from 'vue-router';

const route = useRoute();

const id = ref(route.params.id);
const state = reactive({
  todo: {
    id: '',
    todo: '',
    desc: '',
    done: '',
  },
});

const getTodo = async () => {
  try {
    const response = await axios.get(`/api/todos/${id.value}`);
    const data = await response.data;

    state.todo.id = data.id;
    state.todo.todo = data.todo;
    state.todo.desc = data.desc;
    state.todo.done = data.done;
  } catch (error) {
    alert('존재하지 않는 ID이에요😭');
    console.log(error);
  }
};

onMounted(() => {
  getTodo();
});
</script>
