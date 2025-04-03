<template>
  <div>
    <h1 class="mt-4">Post</h1>
    <div class="mt-4">
      <h5>Todo 추가</h5>

      <form @submit.prevent="addTodo" class="form-group">
        <label for="todo">제목</label>
        <input
          class="form-control"
          type="text"
          v-model="state.todo.todo"
          id="todo"
        />

        <label for="description">설명</label>
        <input
          class="form-control"
          type="text"
          v-model="state.todo.desc"
          id="description"
        />

        <button class="btn btn-primary" type="submit">추가</button>
      </form>
    </div>
  </div>
</template>

<script setup>
import axios from 'axios';
import { reactive } from 'vue';
import { useRouter } from 'vue-router';

const state = reactive({
  todo: {
    todo: '',
    desc: '',
    done: false,
  },
});

const router = useRouter();

const addTodo = async () => {
  try {
    if (!state.todo.todo) {
      alert('제목을 입력해주세요.');
      return;
    } else if (!state.todo.desc) {
      alert('설명을 입력해주세요.');
      return;
    }

    const url = `/api/todos`;
    const response = await axios.post(url, state.todo);

    if (response.status === 201) {
      alert('Todo가 추가되었어요!');
      const id = response.data.id;
      state.todo.todo = ''; // 초기화
      state.todo.desc = ''; // 초기화
      router.push(`/get/${id}`); // 화면 이동
    }
  } catch (error) {
    alert('Todo 생성에 실패했어요😭');
  }
};
</script>
