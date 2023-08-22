import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDt1d8t43SqegTmgNW5AjtsFoWlxARfWLg",
  authDomain: "eng-book-prod.firebaseapp.com",
  projectId: "eng-book-prod",
  storageBucket: "eng-book-prod.appspot.com",
  messagingSenderId: "462704515295",
  appId: "1:462704515295:web:9bf69f6dcca5ad36a2f16a"
};

// Initialize Firebase
export const initFirebaseConfig = ()=>{initializeApp(firebaseConfig)};