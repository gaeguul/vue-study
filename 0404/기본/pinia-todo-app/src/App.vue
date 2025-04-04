<script setup>
import { useTodoListStore } from '@/stores/todoList.js';
import { computed, reactive } from 'vue';

const todoListStore = useTodoListStore();
const { deleteTodo, addTodo } = todoListStore;
const todoList = computed(() => todoListStore.todoList);
const doneCount = computed(() => todoListStore.doneCount);

const states = reactive({
  newTodo: '',
});
</script>

<template>
  <div class="container">
    <h1>TodoList 테스트</h1>
    <div>
      할일 추가:
      <input type="text" v-model="states.newTodo" />
      <button type="button" @click="addTodo(states.newTodo)">추가</button>
    </div>

    <div>
      <ul>
        <li v-for="todo in todoList" :key="todo.id">
          <span>
            {{ todo.todo }}
          </span>
          <button @click="deleteTodo(todo.id)">삭제</button>
        </li>
      </ul>
    </div>

    <div>
      완료된 할일 수:
      {{ doneCount }}
    </div>
  </div>
</template>
