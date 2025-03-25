<template>
  <div class="input-group mb-3">
    <input
      type="text"
      class="form-control"
      v-model="todo"
      @keyup.enter="addTodoHandler"
    />
    <button @click="addTodoHandler" class="btn btn-outline-primary">
      추가
    </button>
  </div>
</template>

<script>
export default {
  name: 'InputTodo',
  data() {
    return {
      todo: '',
    };
  },
  methods: {
    addTodoHandler() {
      if (this.todo.length <= 0) {
        alert('내용을 입력해주세요');
        return;
      } // 길이가 0이면 추가하지 않음

      this.$emit('add-todo', this.todo);
      this.todo = ''; // Todo 초기화
    },
  },
};
</script>
