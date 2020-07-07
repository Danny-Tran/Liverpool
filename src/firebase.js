import firebase from 'firebase/app';
import 'firebase/app'
import 'firebase/database'

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyB7edw_xY-35GlEI52yfvX8cSissT7bKqo",
    authDomain: "liverpool-fc-25215.firebaseapp.com",
    databaseURL: "https://liverpool-fc-25215.firebaseio.com",
    projectId: "liverpool-fc-25215",
    storageBucket: "liverpool-fc-25215.appspot.com",
    messagingSenderId: "43270334679",
    appId: "1:43270334679:web:ec210702f8c11ac3d82892",
    measurementId: "G-GVCJD0SGF3"
}; 

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


const firebaseDB = firebase.database();

const firebaseMatches = firebaseDB.ref('matches')

export {
  firebaseMatches,
  firebaseDB,
}

