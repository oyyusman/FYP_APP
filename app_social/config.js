import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBASc6hc8oHCKS6a5LISBt62sd3MFC1NNQ",
  authDomain: "test-661bc.firebaseapp.com",
  projectId: "test-661bc",
  storageBucket: "test-661bc.appspot.com",
  messagingSenderId: "923806776471",
  appId: "1:923806776471:web:37b9fb272b44eb1ea5bdd2",
  measurementId: "G-GX0QDZMYZH"
}
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
export {firebase};