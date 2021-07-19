<template lang="html">
  <div class="profile">
    <div class="head">
      <h1><fa :icon="['fas', 'user-circle']"/></h1>
      <h1>patient name</h1>
    </div>

    <div class="profileContent">
      <p>Name: </p>
      <p></p>
      <p>E-mail</p>
      <p></p>
      <p>Phone number: </p>
      <p></p>
      <p>Doctor ID: </p>
      <p></p>
      <p>Injury: </p>
      <p></p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PatientProfile',
}
</script>

<style lang="css" scoped>
.profileContent {
  text-align: left;
}
</style>
