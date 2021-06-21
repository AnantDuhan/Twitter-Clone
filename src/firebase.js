import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyAxcGw9MgoQLnFBpMKnn0xT50_X5vhPSeo",
    authDomain: "twitter-clone-1b00b.firebaseapp.com",
    projectId: "twitter-clone-1b00b",
    storageBucket: "twitter-clone-1b00b.appspot.com",
    messagingSenderId: "361694995910",
    appId: "1:361694995910:web:24e2a6d2026180ce61fec7",
    measurementId: "G-MPEC75ZFD0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;