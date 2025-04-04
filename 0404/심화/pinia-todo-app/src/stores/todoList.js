import { defineStore } from 'pinia';
import { computed, reactive } from 'vue';

export const useTodoListStore = defineStore('todoList', () => {
  const states = reactive({
    todoList: [
      { id: 1, todo: 'ES6학습', done: false },
      { id: 2, todo: 'React학습', done: false },
      { id: 3, todo: 'ContextAPI 학습', done: true },
      { id: 4, todo: '야구경기 관람', done: false },
    ],
    lastId: 4,
  });

  const todoList = computed(() => states.todoList);

  const doneCount = computed(() => {
    const doneList = states.todoList.filter((todo) => todo.done === true);
    return doneList.length;
  });

  const addTodo = (todo) => {
    states.todoList.push({ todo: todo, done: false, lastId: ++states.lastId });
    console.log(states.todoList);
  };

  const deleteTodo = (id) => {
    const idx = states.todoList.findIndex((todo) => todo.id === id);
    states.todoList.splice(idx, 1);
  };

  return { todoList, doneCount, addTodo, deleteTodo };
});
