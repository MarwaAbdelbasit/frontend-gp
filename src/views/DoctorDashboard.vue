<template lang="html">
  <div class="doctorDash container">
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
          <li @click="activeTab = '1'" :class="[activeTab === '1' ? 'active' : '']"><span>Add a patient</span></li>
          <li @click="activeTab = '2'" :class="[activeTab === '2' ? 'active' : '']"><span @click="getPatients">Show all patients</span></li>
          <li @click="activeTab = '3'" :class="[activeTab === '3' ? 'active' : '']"><span>Evaluate a patient</span></li>
        </ul>
      </div>
    </div>
    <div class="viewer mar">
      <div class="evaluate" v-if="activeTab === '3'">
        <EvaluationForm />
      </div>

      <div class="addPatient" v-if="activeTab === '1'">
        <AddPatientForm />
      </div>

      <div class="showAll" v-if="activeTab === '2'">
         <ShowAllPatients />
        <div class="patient" v-for="patient in patients" :key="patient.id">
          <router-link :to="{ name: '', params: {} }">
            {{patient.id}} . {{patient.name}}
          </router-link>
          <p v-for="injury in injuries" :key="injury">{{patient.injury.name}}</p>
          <hr>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import EvaluationForm from '../components/EvaluationForm.vue'
import AddPatientForm from '../components/AddPatientForm.vue'
// import ShowAllPatients from '../components/ShowAllPatients.vue'

export default {
  name: 'DoctorDashboard',
  data() {
      return {
        activeTab: '1',
        patients: [],
        numberOfPatients: 0,
        injuries: [],
      }
  },
  methods: {
    async getPatients() {
      const resp = await axios.get('http://f9b588909b24.ngrok.io/allpatients');
      console.log(resp);
      this.patients = resp.data;
      this.injuries = resp.data.injuries;
    },

    // async profile() {
    //   const resp = await axios.get('http://f9b588909b24.ngrok.io/patient', patient.id);
    // }

    // getPatients() {
    //   axios
    //   .get('http://f9b588909b24.ngrok.io/patient')
    //   .then((response) => {
    //     console.log(response.data);
    //     this.patients = response.data
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   })
    // }
  },
  components: {
    EvaluationForm,
    AddPatientForm,
    // ShowAllPatients,
  },
  // mounted() {
  //   console.log("hello from mounted");
  //   axios.get('https://jsonplaceholder.typicode.com/posts')
  //   .then(response => {
  //     this.patients = response.data;
  //     this.numberOfPatients = this.patients.length;
  //     console.log(this.numberOfPatients);
  //   });
  // }
}
</script>

<style lang="css" scoped>
.doctorDash {
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
