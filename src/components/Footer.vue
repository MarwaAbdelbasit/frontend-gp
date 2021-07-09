<template lang="html">
  <div class="footer">
  <div class="footerContent">
    <div class="aboutUs">
      <h4>About us</h4>
      <p>a7na gamden w msh mota5atzleen</p>
    </div>

    <div class="ourServices">
      <ul>
        <li>service 1</li>
        <li>service 1</li>
        <li>service 1</li>
        <li>service 1</li>
      </ul>
    </div>

    <div class="followUs">
      <ul>
        <li>facebook</li>
        <li>facebook</li>
        <li>facebook</li>
        <li>facebook</li>
      </ul>
    </div>
  </div>

    <div class="copyright">
      copyright reserved 2021
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
}

.footerContent {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
}

.copyright {
  display: inline-block;
  width: 100%;
}
</style>
