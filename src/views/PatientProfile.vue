<template lang="html">
  <div class="profile">
    <div v-if="patient">
      <h1>patient profile</h1>
      <h2>{{patient.name}}</h2>
      <p>patient id is {{patientID}}</p>
      <p>this is progress {{patient.Progresses}}</p>
      <div>
        <table>
          <!-- 1st row -->
          <tr v-for="game in patient.games" :key="game.id">
            <th>game: {{game.name}} _ {{game.id}}</th>
          </tr>

          <!-- 2nd row -->
          <tr>
            <td>game 1 l 1</td>

            <td class="price">
              2nd row 2
            </td>

            <td class="price">
              2nd row 3
            </td>

            <td class="price">
            </td>

            <td class="price">
            </td>
          </tr>

          <!-- 3rd row -->
          <tr>
            <td class="light">HDD Space</td>
          </tr>

          <tr>
            <td class="light">Traffic</td>
          </tr>

          <tr>
            <td class="light">E-mail address</td>
          </tr>

          <tr>
            <td class="light">FTP accounts</td>
          </tr>

          <tr>
            <td class="light">Databases</td>
          </tr>

          <tr>
            <td class="light">Dedicated IP</td>
          </tr>

          <tr>
            <td class="light">Free Domain</td>
          </tr>

          <tr>
            <td></td>
          </tr>
        </table>
      </div>
    </div>

    <div v-else>
      <p>Loading patient profile</p>
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'PatientProfile',
  props: ['patientID'],
  data() {
    return {
      patient: null,
    }
  },
  async mounted() {
      const resp = await axios.get(`http://192.168.1.46:3000/patient?id=${this.patientID}`);
      console.log(resp);
      this.patient = resp.data;
  },
}
</script>

<style lang="css" scoped>

table {
  border-collapse: collapse;
  width: auto;
  margin: auto;
}

table, th, td {
  border-right: 1px solid #eee;
  padding: 20px 60px;
  text-align: center;
}

tr:nth-child(even){
  background-color: #fafafa;
}

tr:nth-child(odd){
  background-color: #f7f7f7;
}

tr:hover {
  background-color: #ddd;
}

td {
  color: #66666f;
  font-weight: bold;
}

.light {
  color: #aaaeb9;
}

th {
  background-color: #fc5103;
  color: #fff;
}

</style>
