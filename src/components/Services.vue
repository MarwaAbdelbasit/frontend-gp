<template lang="html">
  <div class="services">
    <h2>Services</h2>

    <div class="servicesItems">
      <div class="service">
        <div class="serviceImg">
          <font-awesome-icon :icon="['fas', 'columns']"/>
        </div>
        <div class="serviceContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <font-awesome-icon :icon="['fas', 'columns']"/>
        </div>
        <div class="serviceContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <font-awesome-icon :icon="['fas', 'columns']"/>
        </div>
        <div class="serviceContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <font-awesome-icon :icon="['fas', 'columns']"/>
        </div>
        <div class="serviceContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Services'
}
</script>

<style lang="css" scoped>
.services {
  background-color: #f2f2f2;
}

.servicesItems {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.servicesItems .service {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  width: 25%;
}

.service .serviceImg {
  font-size: var(--mg-4);
  margin-right: var(--mg-4);
  color: var(--light-color);
}

.service .serviceContent {
  text-align: left;
}

.service .serviceContent h2 {
  margin-bottom: var(--mg-3);
}
</style>
