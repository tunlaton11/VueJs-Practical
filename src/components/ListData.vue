<template>
  <div>
    <PersonData v-for="(item, index) in Emdata" 
    :key="index" :name="Emdata[index].name" :salary="Emdata[index].salary" />
  </div>
</template>

<script>
import PersonData from "./PersonData.vue"

export default {
    name: "ListData",
    components: {
        PersonData
    },
    data() {
        return {
            Emdata : [
                {
                    name: "Peter Parker",
                    salary: 30000
                },
                {
                    name: "Tony Stark",
                    salary: 25000
                },
                {
                    name: "Hank Pym",
                    salary: 40000
                },
                {
                    name: "Micheal Jackson",
                    salary: 15000
                }
            ]
        }
    }
}
</script>

<style scoped>
</style>