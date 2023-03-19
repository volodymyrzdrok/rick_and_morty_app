// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration

// const API_KEY = import.meta.env.VITE_API_KEY;

const firebaseConfig = {
  apiKey: 'AIzaSyCRLztn9UYZ7km2LSehMgGdwznEeg3mSko',
  authDomain: 'rick-and-morty-b62bd.firebaseapp.com',
  projectId: 'rick-and-morty-b62bd',
  storageBucket: 'rick-and-morty-b62bd.appspot.com',
  messagingSenderId: '495852158541',
  appId: '1:495852158541:web:0641d53342db7a122de604',
};

//  Facebook https://rick-and-morty-b62bd.firebaseapp.com/__/auth/handler
export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
