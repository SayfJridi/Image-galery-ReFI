import  firebase from 'firebase/app';
// You don't need to import firebase/app either since it's being imported above
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
  // Your web app's Firebase configuration

  // For Firebase JS SDK v7.20.0 and later, measurementId is optional

  var firebaseConfig = {

    apiKey: "AIzaSyBBvwxHHxeOLGRk1M2iJZxY2L9tSJg_OOM",

    authDomain: "gallery-6673f.firebaseapp.com",

    projectId: "gallery-6673f",

    storageBucket: "gallery-6673f.appspot.com",

    messagingSenderId: "279926363627",

    appId: "1:279926363627:web:ac62b8e332a532fc3fb5ae",

    measurementId: "G-JHL7EP9LC1"

  };

  // Initialize Firebase

  firebase.initializeApp(firebaseConfig);
  

  export const projectStorage = firebase.storage() ; 
export const projectStore = firebase.firestore()  ; 
export const timestamp  = firebase.firestore.FieldValue.serverTimestamp ;
