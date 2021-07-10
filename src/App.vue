<template>
  <div id="app">
    <Home/>
  </div>
</template>

<script>
import Home from './views/Home.vue'

export default {
  name: 'App',
  components: {
    Home,
  },
}
</script>

<style>
#app {
  font-family: 'Ubuntu', sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

*,
::after,
::before {
  box-sizing: border-box;
}

html {
  scroll-behavior: smooth;
}

body {

  margin: 3rem 0 0 0;
  font-size: 0.98rem;
  color: #1e212d;
}

h1, h2, p {
  margin: 0;
}

ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

a {
  text-decoration: none;
}

img {
  max-width: 100%;
  display: block;
  height: auto;
}

.nav_toggle {
  position: fixed;
  right: 0;
  top: 0;
  padding: 2rem;
  font-size: 1.5rem;
  cursor: pointer;
}


</style>
