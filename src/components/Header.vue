<template lang="html">
  <header class="myheader">
    <nav class="nav grid" id="nav">
      <div class="logo">
        <a href="#"><fa :icon="['fas', 'laptop-medical']"/></a>
      </div>

      <div class="nav_menu" id="nav_menu">
        <ul class="nav_list">
          <li class="nav_item">
            <router-link to="/" class="nav_link">Home</router-link>
          </li>
          <li class="nav_item">
            <a href="#services" class="nav_link">Services</a>
          </li>
          <li class="nav_item">
            <a href="#games" class="nav_link">Games</a>
          </li>
          <li class="nav_item">
            <router-link to="/About" class="nav_link">About</router-link>
          </li>
          <li class="nav_item">
            <a href="#" class="nav_link">Contact</a>
          </li>
          <!-- <li class="nav_item">
            <a class="nav_link whiteButton">Get started</a>
          </li> -->
        </ul>
      </div>

      <!-- <div class="nav_toggle" id="nav_toggle">
        <a>
          <font-awesome-icon :icon="['fas', 'bars']"/>
        </a>
      </div> -->

    </nav>
    <router-view />
  </header>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="css" scoped>
.logo a {
  color: #1e212d;
  font-size: 2rem;
}

.myheader {
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
}

.grid {
  /* max-width: 1024px; */
  grid-template-columns: 100%;
  column-gap: 1rem;
  width: calc(100% - 2rem);
  margin: 0 1rem 0 1rem;
}

.nav {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 3rem;
  font-weight: 300;
  padding: 2rem 1rem;
}

.nav_list {
  display: flex;
  flex-direction: row;
}

  .nav_menu {
    /* position: fixed; */
    /* top: 3rem;*/
    right: 0;
    padding: 2rem;
    color: #1e212d;
    margin-right: 0;
  }

  .whiteButton {
    background: none;
    border: 2px solid #ccc;
    color: #ccc;
    padding: 0.5rem 1.5rem;
    border-radius: 2rem;
    /* font-weight: bold; */
    margin: 1rem;
    font-size: 1.25rem;
    cursor: pointer;
  }

/* .show {
  right: 0;
}

.nav_toggle {
  color: #1e212d;
  font-size: 1.5rem;
  cursor: pointer;
} */

.nav_item {
  margin-bottom: 1rem;
  margin-right: 0.5rem;
}

.nav_link {
  color: #1e212d;
  font-size: 1.5rem;
}

.nav_link:hover,
.nav_item .active {
  color: #3ec1a9;
  transition: .3s;
}
</style>
