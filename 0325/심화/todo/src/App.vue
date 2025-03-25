<template>
  <div id="app" class="container">
    <div class="card card-body bg-light">
      <h2 classe="title">Todo</h2>
    </div>

    <div class="card card-default card-borderless">
      <div class="card-body">
        <InputTodo @add-todo="addTodo" />

        <TodoCount :todolist="todolist" />

        <TodoList
          :todolist="sortedTodoList"
          @toggle-completed="toggleCompleted"
          @delete-todo="deleteTodo"
        />
      </div>
    </div>
  </div>
</template>

<script>
import InputTodo from './components/InputTodo.vue';
import TodoCount from './components/TodoCount.vue';
import TodoList from './components/TodoList.vue';

const ts = new Date().getTime();

export default {
  name: 'App',

  components: {
    InputTodo,
    TodoList,
    TodoCount,
  },

  data() {
    return {
      todolist: [
        { id: ts, todo: '자전거 타기', completed: false },
        { id: ts + 1, todo: '딸과 공원 산책', completed: true },
        { id: ts + 2, todo: '일요일 애견 카페', completed: false },
        { id: ts + 3, todo: 'Vue 원고 집필', completed: false },
      ],
    };
  },

  methods: {
    addTodo(newTodo) {
      this.todolist.push({
        id: new Date().getTime(),
        todo: newTodo,
        completed: false,
      });
    },

    deleteTodo(id) {
      let index = this.todolist.findIndex((element) => element.id === id);
      this.todolist.splice(index, 1);
    },

    toggleCompleted(id) {
      let index = this.todolist.findIndex((element) => element.id === id);
      this.todolist[index].completed = !this.todolist[index].completed;
    },
  },

  computed: {
    sortedTodoList: function () {
      return this.todolist.sort((a, b) => {
        if (a.completed === b.completed) {
          return a.todo.localeCompare(b.todo);
        }
        return a.completed - b.completed;
      });
    },
  },
};
</script>
