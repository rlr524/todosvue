<template>
  <header>
    <h1>Yui's ToDo List</h1>
    <img
      src="https://vignette.wikia.nocookie.net/yuripedia/images/b/b1/Hirasawa.Yui.full.417557.jpg/"
      alt="Yui eating a strawberry from a piece of cake"
    />
    <div id="nav">
      <router-link class="home-link" to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </div>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
header {
  background: lightpink;
  margin-bottom: 1%;
  padding-top: 1%;
  text-align: center;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #fff;
  text-decoration: none;
}

#nav a.router-link-exact-active {
  color: #555;
}

.home-link {
  padding-right: 1%;
}

img {
  width: 45%;
  margin: 1% 0;
}

@media (max-width: 700px) {
  h1 {
    font-size: 1rem;
    font-weight: 700;
  }
}
</style>
