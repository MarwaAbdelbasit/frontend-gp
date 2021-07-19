<template lang="html">
  <div class="allPatients">
    <div class="card">
      <h2><fa :icon="['fas', 'user-circle']"/></h2>
      <h2>patient's name</h2>
    </div>

    <!-- <div class="patientOne">
      <PatientProfile />
    </div> -->

    <div class="card">
      <h2><fa :icon="['fas', 'user-circle']"/></h2>
      <h2>patient's name</h2>
    </div>

    <!-- <div class="patientTwo">

    </div> -->

    <div class="card">
      <h2><fa :icon="['fas', 'user-circle']"/></h2>
      <h2>patient's name</h2>
    </div>

    <!-- <div class="patientThree">

    </div> -->

    <div class="card">
      <h2><fa :icon="['fas', 'user-circle']"/></h2>
      <h2>patient's name</h2>
    </div>

    <div class="patientFour">

    </div>
  </div>
</template>

<script>
// import PatientProfile from './PatientProfile.vue'

export default {
  name: 'ShowAllPatients',
  components: {
    // PatientProfile
  },
}
</script>

<style lang="css" scoped>
.allPatients {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-around;
  justify-content: space-around;
}

.card {
  box-shadow: 0 1px 4px #3ec1a982;
  border-radius: 1rem;
  padding: 1rem 2rem;
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  width: 25%;
  cursor: pointer;
}

.card:hover {
  box-shadow: 0 30px 41px rgb(56 56 56 / 15%);
}
</style>
