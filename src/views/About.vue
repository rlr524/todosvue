<template>
  <div class="about">
    <h1>Yui's ToDo List</h1>
    <p>
      Yui's todo list is a portfolio project of Emiya Consulting. It is fully
      functional; anyone can create some todos accompanied by their favorite
      lead guitarist of Hokago Tea Time. Sit back, relax, have some cake and
      tea, and keep track of your tasks with Yui.
    </p>
    <h3>Technologies and Architecture</h3>
    <p>
      The todo list is built on a Vue.js frontend, with a REST API layer written
      in JavaScript for data served from MongoDB. The application is served from
      Netlify and the REST API from Heroku.
    </p>
    <h3>Contact Us</h3>
    <p>
      For information on engaging with us,
      <a :href="`mailto:${email}`">email us.</a>
    </p>
  </div>
</template>

<script>
export default {
  name: "About",
  data() {
    return {
      email: "rob@emiyaconsulting.com"
    };
  }
};
</script>

<style scoped>
h1,
h3,
p {
  margin-bottom: 0.5rem;
}
</style>
