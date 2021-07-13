<template lang="html">
  <div class="signupPage">
    <h1>
      <router-link :to="{ name: 'Home' }" class="home">
        <fa :icon="['fas', 'laptop-medical']"/>
      </router-link>
    </h1>
    <h1>signup</h1>
    <div class="signup">
      <form action="index.html" method="post">
        <div class="username field">
          <label for="username" class="label">Username:</label>
          <input class="input" type="text" name="" value="" placeholder="enter your name">
        </div>
        <div class="email field">
          <label for="email" class="label">E-mail:</label>
          <input class="input" type="text" name="" value="" placeholder="enter your e-mail">
        </div>
        <div class="number field">
          <label for="number" class="label">Phone number:</label>
          <input class="input" type="number" name="" value="" placeholder="enter your phone number">
        </div>
        <div class="select field">
          <label for="select" class="label">Are you a patient or a doctor:</label>
          <select class="selectBox input" name="">
            <option value="doctor">Doctor</option>
            <option value="patient">Patient</option>
          </select>
        </div>
        <div class="password field">
          <label for="password" class="label">password:</label>
          <input class="input" type="password" name="" value="" placeholder="enter your password">
        </div>
        <div class="repassword field">
          <label for="repassword" class="label">Re-enter password:</label>
          <input class="input" type="password" name="" value="" placeholder="re-enter your password">
        </div>
        <button class="button" type="button" name="button">Sign up</button>
      </form>
    </div>
    <div class="login">
      <h3><router-link :to="{ name: 'Login' }" class="loginBut">Already have an account!</router-link></h3>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Signup',
}
</script>

<style lang="css" scoped>
.signupPage {
  margin: auto;
  width: 30%;
}

.signupPage h1,
.home {
  margin-bottom: 1rem;
  color: #4da3ca;
}

.signup {
  background: linear-gradient(to right, #4ca2cd, #67B26F);
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
  padding: 1rem 2rem;
  border-radius: 1rem;
  box-shadow: 0 1px 4px rgba(146, 161, 176, .15);
}

.signup:hover {
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

.login {
  margin-top: 1rem;
  border: 1px solid #4da3ca;
  border-radius: 1rem;
}

.loginBut {
  color: #1e212d;
}

.loginBut:hover {
  color: #4da3ca;
}
</style>
