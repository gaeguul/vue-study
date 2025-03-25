<template>
  <li
    class="list-group-item d-flex justify-content-between align-items-center"
    :class="{ 'list-group-item-success': todo.completed }"
  >
    <div class="form-check">
      <input
        type="checkbox"
        class="form-check-input"
        v-model="todo.completed"
        @click="toggleCompletedHandler(todo.id)"
      />
      <span :class="{ 'todo-done text-success': todo.completed }">{{
        todo.todo
      }}</span>
    </div>
    <span
      @click.stop="deleteTodoHandler(todo.id)"
      class="btn btn-secondary btn-sm"
      >삭제</span
    >
  </li>
</template>

<script>
export default {
  name: 'TodoItem',

  emits: ['toggle-completed', 'delete-todo'],

  props: {
    todo: {
      type: Object,
      required: true,
    },
  },

  methods: {
    toggleCompletedHandler(id) {
      this.$emit('toggle-completed', id);
    },
    deleteTodoHandler(id) {
      this.$emit('delete-todo', id);
    },
  },
};
</script>

<style>
.todo-done {
  text-decoration: line-through;
}
</style>
