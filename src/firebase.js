import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
 apiKey: "AIzaSyBvVm3feSd6JHlA4Th9U0PvU-pPbAaotDk",
 authDomain: "linkedin-clone-4d84a.firebaseapp.com",
 projectId: "linkedin-clone-4d84a",
 storageBucket: "linkedin-clone-4d84a.appspot.com",
 messagingSenderId: "963756955064",
 appId: "1:963756955064:web:4c50818323f421a17cab4d"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };