<template lang="html">
  <div class="addPatientForm">
    <form class="form" action="index.html" method="post" @submit.prevent="addPatient">
      <div class="name field">
        <label for="">patient's name: </label>
        <input class="input" type="text" v-model="patientForm.name" placeholder="enter patient's name">
      </div>

      <div class="email field">
        <label for="">patient's e-mail: </label>
        <input class="input" type="text" v-model="patientForm.email" placeholder="enter patient's e-mail">
      </div>

      <div class="password field">
        <label for="">patient's password: </label>
        <input class="input" type="password" v-model="patientForm.password" placeholder="enter patient's password">
      </div>

      <div class="phone field">
        <label for="">patient's phone number: </label>
        <input class="input" type="number" v-model="patientForm.phone" placeholder="enter patient's phone number">
      </div>

      <div class="select field">
        <label for="select" class="label">Choose gender:</label>
        <select class="selectBox input" name="" v-model="patientForm.gender">
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <div class="doctorId field">
        <label for="">supervising doctor ID: </label>
        <input  class="input" type="number" v-model="patientForm.doctorId" placeholder="enter your ID">
      </div>

      <div class="injury field">
        <label for="">type of injury: </label>
        <input class="input" type="text" v-model="patientForm.injury" placeholder="enter injury type">
      </div>

      <button class="button" type="submit" name="button">Submit patient</button>
    </form>
    <button @click="created" type="button" name="button">click</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'AddPatientForm',
  data() {
    return {
      patientForm: {
        name: '',
        email: '',
        phone: '',
        password: '',
        gender: '',
        doctorId: '',
        injury: '',
      }
    }
  },

  methods: {
    async addPatient() {
      console.log(typeof this.patientForm);
      const jsonForm = JSON.stringify(this.patientForm);
      console.log(typeof jsonForm);
      const resp = await axios.post('http://f9b588909b24.ngrok.io/patient', this.patientForm);
      console.log(resp);
    },
    // async created() {
    //   const patient = {name: 'yarab'};
    //   const resp = await axios.post('http://f9b588909b24.ngrok.io/patient', JSON.stringify(patient));
    //   console.log(resp);
    // }
  }
}
</script>

<style lang="css" scoped>
.field {
  text-align: left;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 3rem;
}

.field label {
  font-size: 1.5rem;
  width: 40%;
}

.input {
  margin-left: 3rem;
  width: 40%;
  background-color: #fff;
  border: 3px solid #3ec1a9;
  border-radius: 0.5rem;
  outline: none;
  padding: 0.3rem 1rem;
  height: 3rem;
}

.button {
  margin: 1rem 0;
  width: 100%;
  background: none;
  color: #3ec1a9;
  font-size: larger;
  font-weight: bold;
  border: 3px solid #3ec1a9;
  border-radius: 0.5rem 1rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}

.button:hover {
  color: #fff;
  background-color: #3ec1a9
}
</style>
