// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app"s Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "anglaar-blog.firebaseapp.com",
  projectId: "anglaar-blog",
  storageBucket: "anglaar-blog.appspot.com",
  messagingSenderId: "823170689338",
  appId: "1:823170689338:web:a8b740a670711f11a1c803",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
