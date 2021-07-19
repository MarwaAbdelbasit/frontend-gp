<template lang="html">
  <div class="services">
    <div class="sectionHeader">
      <h1>Services</h1>
      <p>Services our project provides.</p>
    </div>

    <div class="servicesItems">
      <div class="service">
        <div class="serviceImg">
          <fa :icon="['fas', 'columns']"/>
        </div>
        <div class="serviceContent">
          <h2>Dashboard</h2>
          <p>User friendly dashboards to help the doctor track the progess of any patient, And also a dashboard for the patient.</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <fa :icon="['fas', 'gamepad']"/>
        </div>
        <div class="serviceContent">
          <h2>Games</h2>
          <p>Two game: Cubes game, and Musical fingers game. Both together focus on treating upper limb hemiplegia injury.</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <fa :icon="['fas', 'binoculars']"/>
        </div>
        <div class="serviceContent">
          <h2>Web application</h2>
          <p>A web application to help doctors monitor and evaluate patients' condition.</p>
        </div>
      </div>

      <div class="service">
        <div class="serviceImg">
          <fa :icon="['fas', 'ambulance']"/>
        </div>
        <div class="serviceContent">
          <h2>Technical support</h2>
          <p>Providing Technical support for either the doctor (physical therapy center), or the patients.</p>
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
  background-color: #fff;
  padding: 5rem;
}

.sectionHeader h1 {
  margin-bottom: var(--mg-3);
  font-size: 2rem;
  color: var(--dark-color);
}
.sectionHeader p {
  color: #aaa;
  margin: 1rem 15rem;
  font-size: 20px;
}

.sectionHeader {
  margin-bottom: 5rem;
}

.servicesItems {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-around;
  justify-content: space-around;
}

.servicesItems .service {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  width: 30%;
}

.service .serviceImg {
  font-size: 2rem;
  margin-right: 1rem;
  color: #3ec1a9;
}

.service .serviceContent {
  text-align: left;
  margin-left: 1rem;
}

.service .serviceContent h2 {
  margin-bottom: 1.5rem;
}

.service .serviceContent p {
  font-weight: bold;
  line-height: 1.2;
}
</style>
