// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.9.2/firebase-analytics.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCD-ezhLz-IHiyFQNrER0FpUXr5wuG-Vrc",
  authDomain: "vtv-cgv-con-new.firebaseapp.com",
  databaseURL: "https://vtv-cgv-con-new-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "vtv-cgv-con-new",
  storageBucket: "vtv-cgv-con-new.appspot.com",
  messagingSenderId: "800256530021",
  appId: "1:800256530021:web:7f67df0a2cd2d11536188c",
  measurementId: "G-4P05X4QNMQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);