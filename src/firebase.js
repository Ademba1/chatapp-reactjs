import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCJCmDi1SjB8JckdR4f7KLd3zHq2E5v0TU",
    authDomain: "chatapp-aca7e.firebaseapp.com",
    projectId: "chatapp-aca7e",
    storageBucket: "chatapp-aca7e.appspot.com",
    messagingSenderId: "251189043612",
    appId: "1:251189043612:web:edf2945aee9927e3092859",
    measurementId: "G-74LT342GY4"
  };

  //Initialize firebase App
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  // db variable accepts a firestore instance of the Firebase App
  const db = firebaseApp.firestore();

  // authentication handler
  const auth = firebase.auth();

  //authentication using google
  const provider = new firebase.auth.GoogleAuthProvider();
  

  export {auth, provider};
  export default db;