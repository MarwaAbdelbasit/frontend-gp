<template lang="html">
  <div class="loginPage">
    <div class="logo">
      <h1>
        <router-link :to="{ name: 'Home' }" class="home">
          <fa :icon="['fas', 'laptop-medical']"/>
        </router-link>
      </h1>
    </div>

    <h1>Login</h1>

    <div class="login">
      <form action="/" method="post" @submit.prevent="login">
        <div class="username field">
          <label for="username" class="label">username or e-mail:</label>
          <input class="input" type="text" name="username" v-model="loginForm.username" placeholder="enter username or e-mail">
        </div>

        <div class="select field">
          <label for="select" class="label">Are you a patient or a doctor:</label>
          <select class="selectBox input" name="" v-model="loginForm.select">
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>

        <div class="password field">
          <label for="password" class="label">password:</label>
          <input class="input" type="password" name="password" v-model="loginForm.password" placeholder="enter password">
        </div>
        <button @click="login" class="button" type="submit" name="login">Login</button>
      </form>
    </div>

    <!-- <div class="errorList">
      <div class="error" v-for="error in formErrors" v-bind:key="error">
        {{ error }}
      </div>
    </div> -->

    <div class="signup">
      <h3><router-link :to="{ name: 'Signup' }" class="signupBut">Create a new account!</router-link></h3>
      <router-view />
    </div>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Login',
  data() {
    return {
      // formErrors: [],
      // username: null,
      // password: null,
      // minChar: 8,
      loginForm: {
        username: '',
        select: '',
        password: '',
      },
      isLog: false,
    }
  },
  methods: {
    async login() {
      console.log(this.loginForm.select);
      if (this.loginForm.select === 'doctor') {
        await axios.get(`http://f9b588909b24.ngrok.io/doctor/${this.loginForm.username}`)
          .then(() => {
            this.$router.push({name: 'DoctorDashboard'});
          });
      }
      else if (this.loginForm.select === 'patient') {
        await axios.get(`http://f9b588909b24.ngrok.io/doctor/${this.loginForm.username}`)
          .then(() => {
            this.$router.push({name: 'PatientDashboard'});
          });
      }
    },
    // validateForm: function(e) {
    //
    //   this.formErrors = []; //to start without any errors
    //
    //   if(!this.username) {
    //     this.formErrors.push('username can not be empty!');
    //   }
    //
    //   if(!this.password) {
    //     this.formErrors.push('password can not be empty!');
    //   }
    //
    //   if(this.password && this.password.length < this.minChar) {
    //     this.formErrors.push('please re-enter your password');
    //   }
    //
    //   if(!this.formErrors.length) {
    //     return true;
    //   }
    //
    //   e.preventDefault(); //msh 3awz el form yt3mlha submit 8er lma el function de trg3ly true
    // }
  }
}
</script>

<style lang="css" scoped>
.loginPage {
  margin: auto;
  width: 30%;
}

.loginPage h1,
.home {
  margin-bottom: 1rem;
  color: #4da3ca;
}

.logo {
  border-radius: 50%;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
  width: 70px;
  height: 70px;
  margin: auto;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}

.logo:hover {
  box-shadow: 0 30px 41px rgb(56 56 56 / 15%);
}

.login {
  background: linear-gradient(to right, #4ca2cd, #67B26F);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
}

.login:hover {
  box-shadow: 0 30px 41px rgb(56 56 56 / 15%);
}

.field {
  display: flex;
  flex-direction: column;
}

.label {
  text-align: left;
  font-size: larger;
  margin-bottom: 0.5rem;
}

.input {
  background-color: #fff;
  border: none;
  border-radius: 0.2rem;
  outline: none;
  padding: 0.3rem 1rem;
  margin-bottom: 0.5rem;
}

.button {
  margin: 1rem 0;
  width: 100%;
  background: none;
  color: #fff;
  font-size: larger;
  border: 2px solid #fff;
  border-radius: 0.5rem 1rem;
  padding: 0.2rem 0.5rem;
  cursor: pointer;
}

.button:hover {
  border-radius: 1rem 0.5rem;
}

.signup {
  margin-top: 1rem;
  border: 1px solid #4da3ca;
  border-radius: 1rem;
}

.signupBut {
  color: #1e212d;
}

.signupBut:hover {
  color: #4da3ca;
}

.errorList {
  background-color: #ffcccc;
  margin: 2rem;
}

.errorList .error {
  margin-bottom: 1rem;
}
</style>
