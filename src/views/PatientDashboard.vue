<template lang="html">
  <div class="patientDash container">
    <div class="sidebar mar">
      <div class="welcome">
        <div class="logoDiv">
          <h2><fa :icon="['fas', 'laptop-medical']"/></h2>
          <p style="margin-left: 0.5rem; font-weight: bold;">Physical therapy using video games</p>
        </div>
        <div class="logoDiv" style="margin-top: 1rem;">
          <h2><fa :icon="['fas', 'user-circle']"/></h2>
          <p style="margin-left: 0.5rem; font-weight: bold;">Welcom Dr.</p>
        </div>

        <hr style="height:1px; border-width:0; color:#fff; background-color:#fff">

        <ul class="tabList">
          <router-link :to="{ name: 'Home', params: {} }" class="home">
            <li><span>Home</span></li>
          </router-link>
        </ul>
      </div>
    </div>
    <div class="viewer mar">
      <div class="profile">
        <div v-if="patient">
          <h1>patient profile</h1>
          <h2>{{patient.name}}</h2>
          <p>parient id is</p>
          <!-- patientID -->
        </div>

        <div v-else>
          <p>Loading patient profile</p>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {

  name: 'PatientDashboard',
  props: ['patientID'],
  data() {
      return {
        activeTab: '1',
        cubeProgress: [],
        fingerProgress: [],
        profile: null,
      }
  },
  methods: {
    showProgressCubes() {
      axios.get('' + this.id).
      then(response => {
        this.cubeProgress = response.data;
      });
    },
    showProgressfinger() {
      axios.get('' + this.id).
      then(response => {
        this.fingerProgress = response.data;
      })
    },
    showProfile() {
      axios.get('' + this.id).
      then(response => {
        this.profile = response.data;
      });
    }
  },
  // mounted() {
  //   async getPatients() {
  //     const resp = await axios.get('http://f9b588909b24.ngrok.io/allpatients/' + this.id);
  //     console.log(resp);
  //     this.patient = resp.data;
  //   },
  // },
}
</script>

<style lang="css" scoped>
.patientDash {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
}

.mar {
  margin-right: 4rem;
  /* margin-top: -1rem; */
}

.sidebar {
  position: fixed;
  left: 0;
  background: linear-gradient(to right, #67b26f, #4ca2cd);
  width: 20rem;
  padding: 2rem;
  text-align: left;
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
  color: #fff;
  height: 100%;
  margin-left: 1rem;
}

.logoDiv {
  display: flex;
  flex-direction: row;
}

.tabList li {
  padding: 1rem;
  font-size: 1.2rem;
  font-weight: bold;
  cursor: pointer;
  opacity: 0.3;
}

.tabList li.active {
  opacity: 1;
}

.tabList li:hover {
  background-color: #f2f2f269;
}

.viewer {
  margin-left: 24rem;
  width: 100%;
  height: 100%;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
  padding: 2rem 4rem;
  border-radius: 1rem;
}

.viewer:hover {
  box-shadow: 0 30px 41px rgb(56 56 56 / 15%);
}

</style>
