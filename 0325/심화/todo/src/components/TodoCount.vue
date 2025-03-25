<template>
  <ul class="list-group list-group-horizontal mb-3">
    <li class="list-group-item">
      전체
      <span class="badge bg-primary rounded-pill">{{ todoLength }}</span>
    </li>
    <li class="list-group-item">
      진행중
      <span class="badge bg-secondary rounded-pill">{{
        notCompletedLength
      }}</span>
    </li>
    <li class="list-group-item">
      완료
      <span class="badge bg-success rounded-pill">{{ completedLength }}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: 'TodoCount',

  props: {
    todolist: {
      type: Array,
      required: true,
    },
  },

  computed: {
    todoLength() {
      return this.todolist.length;
    },

    notCompletedLength() {
      return this.todolist.length - this.completedLength;
    },

    completedLength() {
      return this.todolist.filter((todo) => todo.completed).length;
    },
  },
};
</script>
