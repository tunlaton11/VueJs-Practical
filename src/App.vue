<template>
  <section>
    <img v-bind:src="picture" :width="size" />
    <h2>Fullname: {{ getFullName }}</h2>
    <h2>Age: {{ age }}</h2>
    <h2>Salary: {{salary}}</h2>
    <h2>Role: {{getRole}}</h2>
    <button @click="addSalary">Add Salary</button>
    <button @click="reduceSalary">Reduce Salary</button>
    <button @click="toggleVisible">{{isVisible ? "Hide" : "Show"}} Details</button>
    <div v-show="isVisible">
      <h2>Address: <span v-html="address"></span></h2>
      <a :href="social">facebook</a>
      <h2 v-if="hobby.length === 0">No hobby</h2>
      <div v-else>
        <p>Hobby</p>
        <ul>
          <li v-for="(item, index) in hobby" :key="index">{{ item }}</li>
        </ul>
      </div>
      <p>General</p>
      <ul>
        <li v-for="(item, key) in general" :key="key">{{ key }}: {{ item }}</li>
      </ul>
    </div>
  </section>
</template>

<script>
export default {
  name: "App",
  data() {
    //keep attribute data
    return {
      fname: "Tunlaton",
      lname: "Wongchai",
      age: 20,
      address: "<i>Bangkok</i>",
      picture:
        "https://play-lh.googleusercontent.com/nCVVCbeSI14qEvNnvvgkkbvfBJximn04qoPRw8GZjC7zeoKxOgEtjqsID_DDtNfkjyo",
      size: 100,
      social: "https://www.facebook.com/tunlaton.wongchai",
      hobby: ["music", "travel", "coffee", "play game"], // array
      general: {
        // object
        sex: "Male",
        height: 165,
        weight: 55,
      },
      isVisible: false,
      salary: 25000
    };
  },

  methods: {
    toggleVisible() {
      this.isVisible = !this.isVisible
    },
    addSalary() {
      this.salary += 1000;
    },
    reduceSalary() {
      this.salary -= 1000;
    }
  },

  //getter function (have return)
  computed: { //
    getFullName() {
      return this.fname + " " + this.lname;
    },
    getIncome() {
      return this.salary * 12;
    },
    getRole(){
      return this.salary >= 20000? "Senior" : "Junior";
    }
  },

  watch: {
    salary(value) {
      if (value > 50000) {
        alert("Salary must not more than 50000");
        setTimeout(() => {
          this.salary = 50000
        }, 1000)

      }
    }
  }
};
</script>

<style>
</style>
