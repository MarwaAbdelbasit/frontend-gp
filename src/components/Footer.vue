<template lang="html">
  <div class="footer">
  <div class="footerContent">
    <div class="aboutUs">
      <h2>About us</h2>
      <p>A team of five enthusiastic senior engineering students came up with an idea to help people with disability have a more fun, and motivating rehabilitation journey.</p>
    </div>

    <div class="followUs">
      <h2>Follow us</h2>
      <ul class="socialList">
        <li class="socialItem">
          <a href="#"><fa :icon="['fab', 'facebook']"/></a>
        </li>
        <li class="socialItem">
          <a href="#"><fa :icon="['fab', 'linkedin']"/></a>
        </li>
      </ul>
    </div>
  </div>

    <div class="copyright">
      Copyright (c) 2021 Copyright Holder All Rights Reserved.
    </div>
  </div>
</template>

<script>
export default {
  name: 'Footer'
}
</script>

<style lang="css" scoped>
.footer {
  background-color: #1e212d;
  padding: 3rem;
  color: #fff;
}

.footerContent {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.aboutUs {
  text-align: left;
  width: 30%;
}

.aboutUs h2 {
  margin-bottom: 1rem;
}

.followUs {
  width: 30%;
  text-align: left;
}

.socialList {
  display: flex;
  flex-direction: row;
  margin-top: 1rem;
}

.socialItem a {
  cursor: pointer;
  color: #fff;
}

.socialItem a:hover {
  color: #ccc;
}

.socialItem {
  color: #fff;
  margin-right: 1rem;
  font-size: 20px;
}

.copyright {
  display: inline-block;
  width: 100%;
  color: #ccc;
  margin-top: 2rem;
}
</style>
