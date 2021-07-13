<template lang="html">
  <div class="doctors">
    <h2>Doctors</h2>

    <div class="doctorsItems">
      <div class="doctor">
        <div class="doctorImg">
          <fa :icon="['fas', 'columns']"/>
        </div>
        <div class="doctorContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="doctor">
        <div class="doctorImg">
          <fa :icon="['fas', 'columns']"/>
        </div>
        <div class="doctorContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="doctor">
        <div class="doctorImg">
          <fa :icon="['fas', 'columns']"/>
        </div>
        <div class="doctorContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>

      <div class="doctor">
        <div class="doctorImg">
          <fa :icon="['fas', 'columns']"/>
        </div>
        <div class="doctorContent">
          <h2>Dashboard</h2>
          <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Doctors',
}
</script>

<style lang="css" scoped>
.doctors {
  background-color: #f2f2f2;
}

.doctorsItems {
  display: flex;
  flex-direction: column;
  margin-top: 3rem;
  flex-wrap: wrap;
  height: 300px;
  align-content: space-between;
}

.doctorsItems .doctor {
  display: flex;
  flex-direction: row;
  margin-bottom: 1.5rem;
  width: 25%;
}

.doctor .doctorImg {
  font-size: var(--mg-4);
  margin-right: var(--mg-4);
  color: var(--light-color);
}

.doctor .doctorContent {
  text-align: left;
}

.doctor .doctorContent h2 {
  margin-bottom: var(--mg-3);
}
</style>
