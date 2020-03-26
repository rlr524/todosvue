<template>
  <div id="app">
    <AddTodo v-on:add-todo="addTodo" />
    <Todos v-bind:todos="todos" v-on:del-todo="deleteTodo" />
  </div>
</template>

<script>
import Todos from "../components/Todos";
import AddTodo from "../components/AddTodo";
import axios from "axios";

export default {
  name: "Home",
  components: {
    Todos,
    AddTodo
  },
  data() {
    return {
      todos: []
    };
  },
  methods: {
    deleteTodo(_id) {
      axios
        .delete(`https://guarded-ravine-39563.herokuapp.com/todoitems/${_id}`)
        .then((this.todos = this.todos.filter(todo => todo.id !== _id)))
        .catch(err => console.log(err));
    },
    addTodo(newTodo) {
      const { title, completed, deleted } = newTodo;
      axios
        .post("https://guarded-ravine-39563.herokuapp.com/todoitems", {
          title,
          completed,
          deleted
        })
        .then(res => (this.todos = [...this.todos, res.data]))
        .catch(err => console.log(err));
    }
  },
  created() {
    axios
      .get("https://guarded-ravine-39563.herokuapp.com/todoitems")
      .then(res => (this.todos = res.data))
      .catch(err => console.log(err));
  }
};
</script>

<style></style>
