// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCrosuaB_V8Jgcz_4HheuK2pZRjCx8oxxs",
    authDomain: "grocery-auth-5bff9.firebaseapp.com",
    projectId: "grocery-auth-5bff9",
    storageBucket: "grocery-auth-5bff9.appspot.com",
    messagingSenderId: "529847101509",
    appId: "1:529847101509:web:6c984f61eaa019171b9b2c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);;
export const auth = getAuth(app);