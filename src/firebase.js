import firebase from 'firebase';

const firebaseConfig = {
  apiKey: 'AIzaSyBrGVWnxmuRiKqDnma2f5A3nnmE0Nxbsx4',
  authDomain: 'clone-2a6eb.firebaseapp.com',
  databaseURL: 'https://clone-2a6eb.firebaseio.com',
  projectId: 'clone-2a6eb',
  storageBucket: 'clone-2a6eb.appspot.com',
  messagingSenderId: '935342667422',
  appId: '1:935342667422:web:c79f995d29e83c3004ed8f',
  measurementId: 'G-GB33FZRZKS',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();

export { db, auth };
