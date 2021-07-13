<template lang="html">
  <div class="home" id="Home">
    <Header/>
    <Slider/>
    <Services id="services"/>
    <Games id="games"/>
    <Suggestions id="suggestions"/>
    <Footer/>
  </div>
</template>

<script>
import Header from '../components/Header.vue'
import Slider from '../components/Slider.vue'
import Services from '../components/Services.vue'
import Games from '../components/Games.vue'
import Suggestions from '../components/Suggestions.vue'
import Footer from '../components/Footer.vue'

export default {
  name: 'Home',
  components: {
    Header,
    Slider,
    Services,
    Games,
    Suggestions,
    Footer,
  },
}
</script>

<style lang="css" scoped>
.forms {
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
