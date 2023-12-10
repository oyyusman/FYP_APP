import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';
import {getFirestore, initializeFirestore} from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBASc6hc8oHCKS6a5LISBt62sd3MFC1NNQ",
  authDomain: "test-661bc.firebaseapp.com",
  projectId: "test-661bc",
  storageBucket: "test-661bc.appspot.com",
  messagingSenderId: "923806776471",
  appId: "1:923806776471:web:37b9fb272b44eb1ea5bdd2",
  measurementId: "G-GX0QDZMYZH"
}
// Initialize Firebase
export const firebase_app = initializeApp(firebaseConfig);
export const firebase_auth = getAuth(firebase_app);
export const firebase_db = initializeFirestore(firebase_app,{
    experimentalForceLongPolling:true,

})



