// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: process.env.REACT_APP_API_KEY,
//   authDomain: process.env.REACT_APP_AUTH_DOMAIN,
//   projectId: process.env.REACT_APP_PROJECT_ID,
//   storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
//   messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
//   appId: process.env.REACT_APP_APP_ID,
// };
const firebaseConfig = {
    apiKey: "AIzaSyBvoZQbJPojCyGh0YGZeDDivbWZ0lHY7uA",
    authDomain: "doctors-portal-413f7.firebaseapp.com",
    projectId: "doctors-portal-413f7",
    storageBucket: "doctors-portal-413f7.appspot.com",
    messagingSenderId: "743552789481",
    appId: "1:743552789481:web:bcc614307a3e9c6a69f978"
  };
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;