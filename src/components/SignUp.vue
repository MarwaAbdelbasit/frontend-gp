<template lang="html">
  <div class="loginContent">
    <h3>Login</h3>
    <div class="username">
      <label class="label" for="">e-mail</label>
      <input type="text" name="" value="" placeholder="enter Your e-mail">
    </div>
    <div class="password">
      <label class="label" for="">password</label>
      <input type="password" name="" value="" placeholder="enter your password">
    </div>
  </div>
</template>

<script>
export default {
  name: 'SignUp',
}
</script>

<style lang="css" scoped>
.loginContent {
  background-color: #f2f2f266;
  padding: 1.5rem 1rem;
  margin-right: 2rem;
  border-radius: 20px;
}

.loginContent:hover {
  background-color: #f2f2f2cf;
}
</style>
