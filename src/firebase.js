import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCGXsNlBwqaJ1v4mZG0L96p3CJUnLypBp4",
  authDomain: "zafer-store-app.firebaseapp.com",
  projectId: "zafer-store-app",
  storageBucket: "zafer-store-app.appspot.com",
  messagingSenderId: "271132967364",
  appId: "1:271132967364:web:52c4472d3be6be3126a491",
  measurementId: "G-Y1WCG68F1Q",
};

// init firebase aap
const firebaseApp = firebase.initializeApp(firebaseConfig);

// init firestore
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
