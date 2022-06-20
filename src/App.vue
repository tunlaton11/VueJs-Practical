<template>
  <section>
    <img v-bind:src="picture" :width="size"/> <!--bind data with attribute using v-bind: or : -->
    <h2>Fullname: {{getFullName()}}</h2>
    <h2>Age: {{age}}</h2>
    <h2>Address: <span v-html="address"></span></h2>
    <a :href="social">facebook</a> <!--bind-->
    <p>Hobby</p>
    <ul>
      <li>{{hobby[0]}}</li>
      <li>{{hobby[1]}}</li>
      <li>{{hobby[2]}}</li>
    </ul>
    <p>General</p>
    <ul>
      <li>Sex: {{general.sex}}</li>
      <li>Height: {{general.height}}</li>
      <li>Weight: {{general.weight}}</li>
    </ul>
    <button @click="showData()">Click</button> <!--event using v-on: or @-->
    <button @click="inAge(2)">Increase Age</button>
    <button @click='deAge()'>Decrease Age</button>
  </section>
</template>

<script>
export default {
  name: 'App',
  data(){ //keep attribute data
    return{
      fname: 'Tunlaton',
      lname: 'Wongchai',
      age: 20,
      address: '<i>Bangkok</i>',
      picture: 'https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo',
      size: 100,
      social: 'https://www.facebook.com/tunlaton.wongchai',
      hobby: ['music', 'travel', 'coffee'], // array
      general: { // object
        sex: 'Male',
        height: 165,
        weight: 55
      }
    }
  },

  methods:{ //likely function
    getFullName(){
      return this.fname + ' ' + this.lname
    },
    showData(){
      alert(this.fname + ' ' + this.lname)
    },
    inAge(num){
      this.age += num
    },
    deAge(){
      this.age -= 1
    }
  }
}
</script>

<style>

</style>
