<template>
    <button type="button" class="btn btn-success" data-bs-toggle="modal" style="margin-right: 20px"
        :data-bs-target="'#' + modalId">
        <i class="bi bi-pencil-fill"></i>
    </button>
    <div class="modal fade" :id="modalId" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title"><b>Edit Personal Data</b></h5>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body">
                    <form @submit.prevent="updatePersondata" class="row">
                        <div class="col-md-6">
                            <label for="fname" class="form-label">First Name</label>
                            <input type="text" class="form-control" id="fname" :value="PersonData.fname" disabled />
                        </div>
                        <div class="col-md-6">
                            <label for="lname" class="form-label">Last Name</label>
                            <input type="text" class="form-control" id="lname" :value="PersonData.lname" disabled />
                        </div>
                        <div class="col-md-3">
                            <label for="age" class="form-label">Age</label>
                            <input type="number" class="form-control" id="age" :value="PersonData.age" ref='age' />
                        </div>
                        <div class="col-md-5">
                            <label for="salary" class="form-label">Salary</label>
                            <input type="number" class="form-control" id="salary" :value="PersonData.salary"
                                ref='salary' />
                        </div>
                        <div class="col-md-12 modal-footer mt-4">
                            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                                Close
                            </button>
                            <button type="submit" class="btn btn-primary" data-bs-dismiss="modal"
                                @click="updatePersonData">
                                Save changes
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import db from "../firebaseInit";

export default {
    name: "EditFormModal",
    props: ['docId', "modalId"],
    data() {
        return {
            PersonData: {}
        }
    },
    methods: {
        async getPersonData() {
            const docRef = doc(db, "PersonData", this.docId);
            onSnapshot(docRef, (doc) => {
                this.PersonData = doc.data();
                // console.log("Current data: ", doc.data());
            });
        },
        async updatePersonData() {
            const docRef = doc(db, "PersonData", this.docId);
            await updateDoc((docRef), {
                age: this.$refs.age.value,
                salary: this.$refs.salary.value
            });
            console.log(`ID: ${this.docId} is updated!`)
        }
    },
    mounted() {
        this.getPersonData();
    }

}
</script>

<style>
</style>