//FIREBASE CONFIGURATION
import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'
import 'firebase/compat/firestore'
import 'firebase/compat/storage'


const firebaseConfig = 
{
    apiKey: "AIzaSyBpTb2VdCnolQZHym3lPacmRqHGaHbsTe4",
    authDomain: "catstronomy-c0b63.firebaseapp.com",
    projectId: "catstronomy-c0b63",
    storageBucket: "catstronomy-c0b63.appspot.com",
    messagingSenderId: "307889108904",
    appId: "1:307889108904:web:48c9b633847166d4d60f9d",
    measurementId: "G-KC7KTT2PZ1"

};


if (!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}

export { firebase }