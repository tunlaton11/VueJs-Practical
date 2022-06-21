
<template>
  <div class="container-fluid">
    <NavBar/>
  </div>

</template>

<script>
import NavBar from './components/navbar.vue';

export default {
  name: 'App',
  components: {NavBar},
  data(){ //keep attribute , can use variety data type
    return{
      fname: 'Tunlaton',
      lname: 'Wongchai',
      nickname: '',
      age: 20,
      address: '<i>Bangkok</i>',
      picture: 'https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo',
      size: 100,
      social: 'https://www.facebook.com/tunlaton.wongchai',
      hobby: ['music', 'travel', 'coffee', 'play game'], // array
      general: { // object
        sex: 'Male',
        height: 165,
        weight: 55,
        sigle: false
      },
      comment: ''

    }
  },

  methods:{ //likely function
    getFullName(){
      return this.fname + ' ' + this.lname
    },
    showComment(){
      this.comment = this.$refs.comment.value
    }
  }
}
</script>

<style>

</style>

