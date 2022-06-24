<template>
  <div class="container-fluid">
    <div class="container w-50 p-4 mt-3" id="form">
      <FormComponent />
    </div>
    <hr>
    <div class="container w-75 p-4 mt-3">
      <h2>Show Personal Data</h2>
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
body {
  color: white !important;
  background: #371b58 !important;
}

#form {
  background: #4c3575;
  border-radius: 15px;
}
</style>
