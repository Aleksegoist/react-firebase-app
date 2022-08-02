// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCX3z52aA2O9sRlr3MvIFHT-W6SxvZgytg",
    authDomain: "fir-auth-f3b83.firebaseapp.com",
    projectId: "fir-auth-f3b83",
    storageBucket: "fir-auth-f3b83.appspot.com",
    messagingSenderId: "476458107342",
    appId: "1:476458107342:web:aac00f23f290d9b53c2b9f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);


export default app;