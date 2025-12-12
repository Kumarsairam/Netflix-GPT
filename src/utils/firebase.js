// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA05jBFB6drz6t13oYKiPQI6Ytv3tG0r24",
  authDomain: "netflixgpt-2c0a3.firebaseapp.com",
  projectId: "netflixgpt-2c0a3",
  storageBucket: "netflixgpt-2c0a3.firebasestorage.app",
  messagingSenderId: "206328393228",
  appId: "1:206328393228:web:22a0d8a3b164c96443c829",
  measurementId: "G-ELNNVYSQGQ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export default firebaseConfig;