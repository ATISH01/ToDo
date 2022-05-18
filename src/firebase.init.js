// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyBU3trZoG1DQVqoW3Io9a5pKhLQjGCLtMM",
  authDomain: "todo-3f02c.firebaseapp.com",
  projectId: "todo-3f02c",
  storageBucket: "todo-3f02c.appspot.com",
  messagingSenderId: "373302119400",
  appId: "1:373302119400:web:abe8a126d84db8379db25d"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;