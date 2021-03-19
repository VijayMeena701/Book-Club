import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

const firebaseConfig = {
  apiKey: 'AIzaSyCw5hMsjJe6jOU7tVes02EQ2O0NYhxTe0M',
  authDomain: 'book-club-fcfe9.firebaseapp.com',
  projectId: 'book-club-fcfe9',
  storageBucket: 'book-club-fcfe9.appspot.com',
  messagingSenderId: '33926359261',
  appId: '1:33926359261:web:29c3df27afc59ab644d334',
  measurementId: 'G-D6Y6RP79B0',
};
const app = firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const db = firebase.firestore();
export const storage = firebase.storage();

export const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export default app;
