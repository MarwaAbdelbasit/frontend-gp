<template lang="html">
  <div class="suggestions">
    <div class="sectionHeader">
      <h1>Suggestions ?</h1>
      <p>Feel free to leave any suggestion of any kind that you believe is gonna help us improve any thing in our project.</p>
    </div>
    <form class="suggestForm" action="index.html" method="post" @submit.prevent="suggest">
      <input type="text" placeholder="Full name" v-model="suggestForm.name">
      <input type="text" placeholder="E-mail Address" v-model="suggestForm.email">
      <textarea name="name" rows="8" cols="80" placeholder="Your suggestions" v-model="suggestForm.suggestion"></textarea>
      <!-- <div class="errorList">
        <div class="error" v-for="error in formErrors" v-bind:key="error">
          {{error}}
        </div>
      </div> -->
      <button class="suggbut" type="submit" name="button">Send suggestions</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Suggestions",
  data() {
    return {
      // formErrors: [],
      // username: null,
      // email: null,
      // suggestion: null,
      suggestForm: {
        name: '',
        email: '',
        suggestion: '',
      }
    }
  },
  methods: {
    // validateForm: function(e) {
    //
    //   this.formErrors = [];
    //
    //   if(!this.username) {
    //     this.formErrors.push('username can not be empty!');
    //   }
    //
    //   if(!this.email) {
    //     this.formErrors.push('e-mail can not be empty!');
    //   }
    //
    //   if(!this.suggestion) {
    //     this.formErrors.push('suggestion can not be empty!');
    //   }
    //
    //   if(!this.formErrors.length) {
    //     return true;
    //   }
    //
    //   e.preventDefault();
    // }
    async suggest() {
      const resp = await axios.post('http://f9b588909b24.ngrok.io/suggestion', this.suggestForm);
      console.log(resp);
    },
  },
}
</script>

<style lang="css" scoped>
.suggestions {
  padding: 5rem;
}

.sectionHeader h1 {
  margin-bottom: 1.5rem;
  font-size: 2rem;
  color: #1e212d;
}
.sectionHeader p {
  color: #aaa;
  margin: 1rem 15rem;
  font-size: 20px;
}

.sectionHeader {
  margin-bottom: 5rem;
}

.suggestForm {
  display: flex;
  flex-direction: column;
  background-color: #3ec1a9;
  padding: 2rem 4rem;
  border-radius: 1rem;
  margin: 0 auto 1rem auto;
  width: 50%;
}

.suggestForm input,
.suggestForm textarea {
  margin: 0 auto 1rem auto;
  padding: 0.5rem 1rem;
  outline: none;
  background-color: #ffffffe0;
  border-radius: 1rem;
  border: none;
  width: 50%;
}

.suggestForm input:hover,
.suggestForm textarea:hover {
  background-color: #fff;
}

.suggbut {
  background: none;
  border-radius: 1rem;
  border: 3px solid #fff;
  color: #fff;
  padding: 0.5rem 2rem;
  font-weight: bold;
  cursor: pointer;
  width: 50%;
  margin: 0 auto 1rem auto;
}

.suggbut:hover {
  border: 3px solid #1e212d;
  color: #1e212d;
}

.errorList {color: #ff0000;}
</style>
