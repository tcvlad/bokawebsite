import firebase from "firebase/compat/app";

const config = {
   //boka db 
   apiKey: "AIzaSyC3hnKOPSGbzUIFRjLCICjDGSMqwTqs0qs",
   authDomain: "boka-f89ec.firebaseapp.com",
   databaseURL: "https://boka-f89ec-default-rtdb.firebaseio.com",
   projectId: "boka-f89ec",
   storageBucket: "boka-f89ec.appspot.com",
   messagingSenderId: "574835943981",
   appId: "1:574835943981:web:73d06a9d7db7df90a9e6a4"
 };

const FireBase = firebase.initializeApp(config);

export default FireBase;