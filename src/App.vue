<template>
  <div class="container" id="app">
    <Header />
    <AddTodo />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Header from "./components/layout/Header";
import Todos from "./components/Todos";
import AddTodo from "./components/AddTodo";

export default {
  name: "App",
  components: {
    Header,
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: [
        {
          id: 1,
          title: "Eat some cake",
          completed: false
        },
        {
          id: 2,
          title: "Drink some of Mugi's tea",
          completed: false
        },
        {
          id: 3,
          title: "Play Giita",
          completed: false
        }
      ]
    };
  },
  methods: {
    deleteTodo(id) {
      this.todos = this.todos.filter(todo => todo.id !== id);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: Arial, Helvetica, sans-serif;
  line-height: 1.4;
}

.container {
  width: 75%;
  margin: 2% auto;
}

.btn {
  display: inline-block;
  border: none;
  background: #555;
  color: #fff;
  padding: 0.4375rem 1.25rem;
  cursor: pointer;
}

.btn:hover {
  opacity: 0.75;
}
</style>
