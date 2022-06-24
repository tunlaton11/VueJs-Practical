<template>
  <h2>Personal Data Form</h2>
  <form @submit.prevent="addPersonData" class="row mt-3">
    <div class="col-md-6">
      <label for="fname" class="form-label">First Name</label>
      <input type="text" class="form-control" id="fname" />
    </div>
    <div class="col-md-6">
      <label for="lname" class="form-label">Last Name</label>
      <input type="text" class="form-control" id="lname" />
    </div>
    <div class="col-md-2">
      <label for="age" class="form-label">Age</label>
      <input type="number" class="form-control" id="age" />
    </div>
    <div class="col-md-4">
      <label for="salary" class="form-label">Salary</label>
      <input type="number" class="form-control" id="salary" />
    </div>
    <div class="col-12 mt-3">
      <button type="submit" class="btn btn-warning">Add data</button>
    </div>
  </form>
</template>

<script>
import { collection, addDoc, Timestamp } from "firebase/firestore";
import db from "../firebaseInit";

export default {
  name: "FormComponent",
  data() {
    return {
      fname: "",
      laname: "",
      age: "",
      salary: "",
      timestamp: Date.now(),
    };
  },
  methods: {
    async addPersonData() {
      const docRef = await addDoc(collection(db, "PersonData"), {
        fname: "Freddie",
        lname: "Mercury",
        age: 45,
        salary: 1002302,
        timestamp: Timestamp.now(),
      });
      console.log("Document written with ID: ", docRef.id);
    },
  },
};
</script>

<style>
</style>