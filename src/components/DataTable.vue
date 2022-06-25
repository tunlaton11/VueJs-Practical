<template>
  <table class="table table-hover table-light shadow">
    <thead class="table-dark">
      <tr>
        <th scope="col">No.</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Salary</th>
        <th scope="col"></th>
        <th scope="col"></th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(item, index) in PersonData" :key="index">
        <th scope="row">{{ index }}</th>
        <td>{{ PersonData[index].fname }}</td>
        <td>{{ PersonData[index].lname }}</td>
        <td>{{ PersonData[index].age }}</td>
        <td>{{ PersonData[index].salary }}</td>
        <td><button class="btn btn-success">Edit</button></td>
        <td><button @click="delPersonData(PersonData[index])" class="btn btn-danger" :id="index">Delete</button></td>
      </tr>
    </tbody>
  </table>
</template>

<script>
import { collection, query, onSnapshot, orderBy, deleteDoc, doc } from "firebase/firestore";
import db from "../firebaseInit";

export default {
  name: "DataTable",
  data() {
    return {
      PersonData: [],
    };
  },
  methods: {
    async getPersonData() {
      const q = await query(collection(db, "PersonData"), orderBy('timestamp'));
      onSnapshot(q, (querySnapshot) => {
        this.PersonData = [];
        querySnapshot.forEach((doc) => {
          this.PersonData.push(doc.data());
        });
        // console.log(unsubscribe);

      });
    },
    async delPersonData(id) {
      const docId = `${id.fname}_${id.lname}`;
      if (window.confirm("Do you really want to delete?")) {
        await deleteDoc(doc(db, "PersonData", docId)).then(() => {
          console.log(`Deleted ID: ${docId} Complete!`)
        })
          .catch((error) => {
            console.error(error);
          })
      }
    }
  },
  created() {
    this.getPersonData();
  },
};
</script>

<style scoped>
button {
  margin: 0 0 0 0;
}
</style>