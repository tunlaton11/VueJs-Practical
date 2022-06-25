<template>
  <div class="container-fluid">
    <div class="container w-50 p-4 mt-3 shadow rounded" id="form">
      <FormComponent />
    </div>
    <div class="container w-75 p-4 mt-3">
      <h2></h2>
      <DataTable />
    </div>
  </div>
</template>

<script>
import FormComponent from "./components/FormComponent.vue";
import DataTable from "./components/DataTable.vue";

export default {
  name: "App",
  components: {
    FormComponent,
    DataTable,
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Merriweather+Sans&display=swap');


body {
  color: black !important;
  background: #E1F2FB !important;
  font-family: 'Merriweather Sans', sans-serif !important;
}

#form {
  background: white;
  border-radius: 15px;
}
</style>
