import  firebase from '@firebase/app';
import firebase_auth from '@firebase/auth';
import firestore from '@firebase/firestore'

const settings = {timestampsInSnapshots: true};
    const firebaseConfig = {
        apiKey: "AIzaSyCiGjCcaVFRHRqxPpkpBBnr9wT8DC-tpGI",
        authDomain: "electronapp-60892.firebaseapp.com",
        databaseURL: "https://electronapp-60892.firebaseio.com",
        projectId: "electronapp-60892",
        storageBucket: "",
        messagingSenderId: "12591953153",
        appId: "1:12591953153:web:83a3888d0f593399"
      };   
 const firebaseapp=firebase.initializeApp(firebaseConfig);     

export default firebaseapp;
