import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCAjLTPF6gAdqdpTnp48cmVfkTPrzjPxSI",
  authDomain: "house-marketplace-app-1ad13.firebaseapp.com",
  projectId: "house-marketplace-app-1ad13",
  storageBucket: "house-marketplace-app-1ad13.appspot.com",
  messagingSenderId: "471305684847",
  appId: "1:471305684847:web:794cabcebafb318a978a9a",
};

// Initiliaze Firebase
initializeApp(firebaseConfig);
export const db = getFirestore;
