<template>
  <h2 align="center"><b>Personal Data Form</b></h2>
  <form @submit.prevent="addPersonData" class="row mt-5">
    <div class="col-md-6">
      <label for="fname" class="form-label">First Name</label>
      <input type="text" class="form-control" id="fname" ref='fname' required />
    </div>
    <div class="col-md-6">
      <label for="lname" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lname" ref='lname' required />
    </div>
    <div class="col-md-2">
      <label for="age" class="form-label">Age</label>
      <input type="number" class="form-control" id="age" ref='age' required />
    </div>
    <div class="col-md-4">
      <label for="salary" class="form-label">Salary</label>
      <input type="number" class="form-control" id="salary" ref='salary' required />
    </div>
    <div class="col-md-6 mt-3 alert alert-danger" role="alert" v-show="showAlert">
      This data is already exists in database!
    </div>
    <div class="col-12 mt-4">
      <button type="submit" class="btn btn-warning">Add data</button>
    </div>

  </form>
</template>

<script>
import { doc, setDoc, Timestamp, getDoc } from "firebase/firestore";
import db from "../firebaseInit";

export default {
  name: "FormComponent",
  data() {
    return {
      showAlert: false
    }
  },
  methods: {
    async addPersonData(event) {
      const docId = `${this.$refs.fname.value}_${this.$refs.lname.value}`;
      const docRef = doc(db, "PersonData", docId)
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        this.showAlert = true
        console.log(`ID: ${docRef.id} is already exists!`);
      }
      else {
        setDoc(docRef, {
          fname: this.$refs.fname.value,
          lname: this.$refs.lname.value,
          age: this.$refs.age.value,
          salary: this.$refs.salary.value,
          timestamp: Timestamp.now(),
        });
        console.log("Document written with ID: ", docRef.id);
        this.showAlert = false
      }
      event.target.reset()
    },
  },
};
</script>

<style>
@import url("https://cdn.jsdelivr.net/npm/bootstrap-icons@1.8.3/font/bootstrap-icons.css");
</style>