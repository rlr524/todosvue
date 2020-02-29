<template>
  <div>
    <form v-on:submit="addTodo">
      <input
        type="text"
        v-model="title"
        name="title"
        placeholder="Add a Todo"
        aria-placeholder="Add a Todo Item"
      />
      <input type="submit" value="Submit" class="btn" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AddToDo",
  data() {
    return {
      title: ""
    };
  }
};
</script>

<style scoped>
form {
  display: flex;
  margin-bottom: 1%;
}

input[type="text"] {
  flex: 10;
  padding: 0.3125rem;
}

input[type="submit"] {
  flex: 2;
}
</style>
