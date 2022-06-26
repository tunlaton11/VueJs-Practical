<template>
  <table class="table table-hover table-light shadow">
    <thead class="table-dark">
      <tr>
        <th scope="col">No.</th>
        <th scope="col">First Name</th>
        <th scope="col">Last Name</th>
        <th scope="col">Age</th>
        <th scope="col">Salary</th>
        <th scope="col">Actions</th>
      </tr>
    </thead>
    <tbody class="table-group-divider">
      <tr v-for="(item, index) in PersonData" :key="index">
        <th scope="row">{{ index + 1 }}</th>
        <td>{{ item.fname }}</td>
        <td>{{ item.lname }}</td>
        <td>{{ item.age }}</td>
        <td>{{ item.salary }}</td>
        <td>
          <EditFormModal :docId="`${item.fname}_${item.lname}`" :modalId="`modal${index}`" />
          <button @click="delPersonData(item)" class="btn btn-danger">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>

</template>

<script>
import EditFormModal from "./EditFormModal.vue";
import { collection, query, onSnapshot, orderBy, deleteDoc, doc } from "firebase/firestore";
import db from "../firebaseInit";

export default {
  name: "DataTable",
  components: {
    EditFormModal
  },
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
      if (window.confirm(`Do you really want to delete ID ${docId} ?`)) {
        await deleteDoc(doc(db, "PersonData", docId)).then(() => {
          console.log(`Deleted ID: ${docId} Complete!`)
        })
          .catch((error) => {
            console.error(error);
          })
      }
    }
  },
  mounted() {
    this.getPersonData();
  },
};
</script>

<style scoped>
button {
  margin: 0 0 0 0;
}
</style>