<template lang="html">
  <div class="slider">
    <div class="darkerbg">
      <div class="slidercontent">
        <h1>What is Physical Therapy using video games</h1>
        <p>
          Approximately 20% of PT patients drop out of treatment within the first three visits, and 70% fail to complete their full course of care.
          So, we created a more fun, engaging , and motivating way of doing physical therapy excersices by playing games that help the patient perform the sufficient excersices for his/her recovery.
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
}
</script>

<style lang="css" scoped>
.slider {
  background-image: url("../assets/slide1.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  color: #fff;
}

.darkerbg {
  background-color: #2228319e;
  padding-bottom: 8em;
  text-align: left;
  padding: 2rem 4rem;
}

.slidercontent {
  margin-top: 20rem;
  font-size: 25px;
  width: 80%;
}

.slidercontent h1 {
  color: #3ec1a9;
  margin-bottom: 1em;
}

.slidercontent p {
  font-size: 25px;
  line-height: 1.5;
  font-size: bold;
}

</style>
