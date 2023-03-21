// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDA6VftY3esSbRX8Ea-Ryp-7XAvK-lsiW4",

  authDomain: "sona-test-70ce3.firebaseapp.com",

  projectId: "sona-test-70ce3",

  storageBucket: "sona-test-70ce3.appspot.com",

  messagingSenderId: "897304655408",

  appId: "1:897304655408:web:be5f99eca4d1294fab1ff5",

  measurementId: "G-SR9TX7N854"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

// const analytics = getAnalytics(app);

export const auth = getAuth(app)

export default app