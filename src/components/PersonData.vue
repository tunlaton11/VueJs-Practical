<template>
  <div>
    <h3>Name: {{name}}</h3>
    <h3>Salary: {{salary}}</h3>
    <hr>
  </div>
</template>

<script>
export default {
    name: "PersonData",
    props:["name", "salary"]
}
</script>

<style scoped>
    h3{
        color:blueviolet;
    }
</style>