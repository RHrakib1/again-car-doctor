// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAFgVyxd4a_A5l1NI0ZZOGoMhM2eSoxfZs",
    authDomain: "car-doctor-f80b1.firebaseapp.com",
    projectId: "car-doctor-f80b1",
    storageBucket: "car-doctor-f80b1.firebasestorage.app",
    messagingSenderId: "556257729816",
    appId: "1:556257729816:web:c1953639a971447a30d26d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;