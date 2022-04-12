// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAzz8mY4kky2Eyfgy2PD7w2KhAHdMOH0U4',
  authDomain: 'react-basic-3f3e9.firebaseapp.com',
  projectId: 'react-basic-3f3e9',
  storageBucket: 'react-basic-3f3e9.appspot.com',
  messagingSenderId: '1097703887135',
  appId: '1:1097703887135:web:5ead2d40ca89cebfb4602a',
  measurementId: 'G-XWYJEHYN7Y',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);
