// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDESSAGptTPnFBRV_2bsjWU42dSrLSG1Ek",
    authDomain: "vue-crud-fef53.firebaseapp.com",
    projectId: "vue-crud-fef53",
    storageBucket: "vue-crud-fef53.appspot.com",
    messagingSenderId: "307058039830",
    appId: "1:307058039830:web:9102f69adc81750e6be937",
    measurementId: "G-WPQHJ29MYD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);


// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

export default db;
