<template>
  <div>
    <form @submit.prevent="addPersonData">
      <div>
        <label for="fname">First Name: </label>
        <input type="text" id="fname" />
      </div>
      <div>
        <laFormSubmitbel for="lname">Last Name: </laFormSubmitbel>
        <input type="text" id="lname" />
      </div>
      <div>
        <label for="age">Age: </label>
        <input type="number" id="age" />
      </div>
      <div>
        <label for="salary">Salary: </label>
        <input type="number" id="salary" />
      </div>
      <button type="submit">Submit</button>
    </form>
  </div>
</template>

<script>
// import firebase from './firebaseInit'
// const db = firebase.firestore();

export default {
  name: "App",
  data() {
    return {
      fname: "Tunlaton",
      laname: "Wongchai",
      age: 20,
      salary: 30000,
      timestamp: Date.now(),
    };
  },
  methods: {
    addPersonData() {
      console.log("Submit");
    },
  },
};
</script>

<style>
</style>
