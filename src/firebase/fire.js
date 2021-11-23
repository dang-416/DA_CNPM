// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyABdlzLL7goHbfBNXPYW-dUlClQHGRBFh4",
    authDomain: "bk-book.firebaseapp.com",
    projectId: "bk-book",
    storageBucket: "bk-book.appspot.com",
    messagingSenderId: "419251146242",
    appId: "1:419251146242:web:12d162aad697c70344611b",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore();
export default app;
