<template>
  <h1>All</h1>

  <div>
    <table class="table table-striped">
      <thead>
        <tr>
          <th>Done</th>
          <th>Id</th>
          <th>Todo</th>
          <th>Description</th>
          <th>Delete</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="todo in states.todos" :key="todo.id">
          <td>
            <input
              class="form-check-input"
              type="checkbox"
              :checked="todo.done"
              @change="toggleTodo(todo.id)"
            />
          </td>

          <td>{{ todo.id }}</td>
          <td>{{ todo.todo }}</td>
          <td>{{ todo.desc }}</td>

          <td>
            <button
              class="btn btn-secondary btn-sm"
              @click="deleteTodo(todo.id)"
            >
              삭제
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';

const states = reactive({
  todos: [],
});

const getAllTodos = async () => {
  try {
    const response = await axios.get(`/api/todos`);
    states.todos = response.data;
  } catch (error) {
    alert('할 일 데이터를 불러오는 과정에 실패했어요😭');
    console.log(error);
  }
};

const toggleTodo = async (id) => {
  try {
    const todo = states.todos.find((todo) => todo.id === id);
    await axios.put(`/api/todos/${id}`, {
      ...todo,
      done: !todo.done,
    });
  } catch (error) {
    alert('할 일 완료 체크에 실패했어요😭');
    console.log(error);
  }
};

const deleteTodo = async (id) => {
  try {
    const response = await axios.delete(`/api/todos/${id}`);
    if (response.status === 200) {
      const idx = states.todos.findIndex((todo) => todo.id === id);
      states.todos.splice(idx, 1);
    } else {
      alert('할 일을 삭제하는 데 실패했어요😭');
    }
  } catch (error) {
    alert('할 일을 삭제하는 데 실패했어요😭');
    console.log(error);
  }
};

onMounted(() => {
  getAllTodos();
});
</script>
