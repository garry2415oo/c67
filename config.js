import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyBHIGmtC1ge7D-kEtGDXjq2A7W6AresBRw",
    authDomain: "app-vote-79724.firebaseapp.com",
    databaseURL: "https://app-vote-79724-default-rtdb.firebaseio.com",
    projectId: "app-vote-79724",
    storageBucket: "app-vote-79724.appspot.com",
    messagingSenderId: "970393303250",
    appId: "1:970393303250:web:05ca66968888fba2c5d50b",
    measurementId: "G-XYVN5C7G09"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();