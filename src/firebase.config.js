// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  // apiKey: import.meta.env.VITE_APIKEY,
  // authDomain: import.meta.env.VITE_AUTHDOMAIN,
  // projectId: import.meta.env.VITE_PROJECTID,
  // storageBucket: import.meta.env.VITE_STORAGEBUCKET,
  // messagingSenderId: import.meta.env.VITE_MESSAGINGSENDERID,
  // appId: import.meta.env.VITE_APPID,
  apiKey: 'AIzaSyCKw8Oj0-a3sGTseVQTH3ECfhyiyl9fOU0',
  authDomain: 'travel-assignment-585bb.firebaseapp.com',
  projectId: 'travel-assignment-585bb',
  storageBucket: 'travel-assignment-585bb.appspot.com',
  messagingSenderId: '414816270927',
  appId: '1:414816270927:web:8c299e3ccbfe82582e483a',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
