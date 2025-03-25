<template>
  <div class="col">
    <ul class="list-group">
      <TodoItem
        v-for="todo in todolist"
        :key="todo.id"
        :todo="todo"
        @toggle-completed="$emit('toggle-completed', $event)"
        @delete-todo="$emit('delete-todo', $event)"
      />
    </ul>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  emits: ['toggle-completed', 'delete-todo'],
  props: {
    todolist: {
      type: Array, // 배열 형태
      required: true, // 필수
    },
  },
};
</script>
