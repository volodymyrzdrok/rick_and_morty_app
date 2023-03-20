import { initializeApp } from 'firebase/app';
import { GoogleAuthProvider } from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyCRLztn9UYZ7km2LSehMgGdwznEeg3mSko',
  authDomain: 'rick-and-morty-b62bd.firebaseapp.com',
  projectId: 'rick-and-morty-b62bd',
  storageBucket: 'rick-and-morty-b62bd.appspot.com',
  messagingSenderId: '495852158541',
  appId: '1:495852158541:web:0641d53342db7a122de604',
};

export const app = initializeApp(firebaseConfig);
export const googleAuthProvider = new GoogleAuthProvider();
