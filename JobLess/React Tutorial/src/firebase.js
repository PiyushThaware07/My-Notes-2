import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyDxntixShfhYVTxxIiBhP-iomkX3Aduk_E",
    authDomain: "yt-clone-2023.firebaseapp.com",
    projectId: "yt-clone-2023",
    storageBucket: "yt-clone-2023.appspot.com",
    messagingSenderId: "820129632499",
    appId: "1:820129632499:web:d180811ba93697fdfaa786"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();