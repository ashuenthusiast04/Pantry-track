// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANYgjxU-8xZEu2P8Baar3x1VAV41g37S0",
    authDomain: "pantry-tracking-6c891.firebaseapp.com",
    projectId: "pantry-tracking-6c891",
    storageBucket: "pantry-tracking-6c891.appspot.com",
    messagingSenderId: "824061382376",
    appId: "1:824061382376:web:366a59f05410703368835d",
    measurementId: "G-VT4MP1ZLM7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const firestore = getFirestore(app);
export { firestore };
