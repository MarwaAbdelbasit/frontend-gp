<template>
  <div id="app">
    <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->

    <!-- <div class="nav_toggle" id="nav_toggle" v-if="mobileView">
      <font-awesome-icon :icon="['fas', 'bars']"/>
    </div> -->
    <Header v-if="!mobileView"/>
    <div class="forms" id="home">
      <LogIn/>
      <SignUp/>
    </div>
    <Services id="services"/>
    <Games id="games"/>
    <Doctors/>
    <Footer/>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import Home from './views/Home.vue'
import Header from './components/Header.vue'
import LogIn from './components/LogIn.vue'
import SignUp from './components/SignUp.vue'
import Services from './components/Services.vue'
import Games from './components/Games.vue'
import Doctors from './components/Doctors.vue'
import Footer from './components/Footer.vue'

export default {
  name: 'App',
  data: ()=> {
    return {
      mobileView: false, //to know if in mobie view or
      showNav: false, //for toggling navigation
    }
  },
  methods: {
    handleView() {
      this.mobileView = window.innerWidth <= 990;
    }
  },
  components: {
    // HelloWorld
    Header,
    LogIn,
    SignUp,
    Services,
    Games,
    Doctors,
    Footer
  },
  created() {
    this.handleView();
  }
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

.forms {
  margin-top: 3rem;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 2rem;
  background: #67B26F;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #4ca2cd, #67B26F);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #4ca2cd, #67B26F); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}
</style>
