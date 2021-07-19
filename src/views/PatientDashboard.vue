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
          <li @click="activeTab = '1'; showProfile;" :class="[activeTab === '1' ? 'active' : '']"><span>My profile</span></li>
          <li @click="activeTab = '2'; showProgressCubes;" :class="[activeTab === '2' ? 'active' : '']"><span>Cubes game</span></li>
          <li @click="activeTab = '3'; showProgressfinger" :class="[activeTab === '3' ? 'active' : '']"><span>Musical Fingers game</span></li>
        </ul>
      </div>
    </div>
    <div class="viewer mar">
      <div class="evaluate" v-if="activeTab === '1'">
        <PatientProfile />
      </div>

      <div class="addPatient" v-if="activeTab === '2'">
        <CubesGamePat />
      </div>

      <div class="showAll" v-if="activeTab === '3'">
        <MusicalFingersPat />
      </div>
    </div>

  </div>
</template>

<script>
import PatientProfile from '../components/PatientProfile.vue'
import CubesGamePat from '../components/CubesGamePat.vue'
import MusicalFingersPat from '../components/MusicalFingersPat.vue'
import axios from 'axios'

export default {

  name: 'PatientDashboard',
  data() {
      return {
        activeTab: '1',
        cubeProgress: [],
        fingerProgress: [],
        profile: [],
      }
  },
  components: {
    PatientProfile,
    CubesGamePat,
    MusicalFingersPat,
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
  }
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
