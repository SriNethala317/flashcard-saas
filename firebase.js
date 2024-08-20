// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.NEXT_PUBLIC_API_KEY,
    authDomain: process.env.NEXT_PUBLIC_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_PROJECT_ID,
    storageBucket: process.env.NEXT_PUBLIC_STORAGE_BUCKET,
    messagingSenderId: process.env.NEXT_PUBLIC_MESSAGING_SENDER_ID,
    appId: process.env.NEXT_PUBLIC_APP_ID
};

// apiKey: "AIzaSyBhk-Arj2DfYXNUatOBfWy3OtR3czdaG_Y",
// authDomain: "flashcard-saas-1dbde.firebaseapp.com",
// projectId: "flashcard-saas-1dbde",
// storageBucket: "flashcard-saas-1dbde.appspot.com",
// messagingSenderId: "490496191213",
// appId: "1:490496191213:web:3cc2f2e0cadf30ff8bbae4"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db;