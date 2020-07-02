import firebase from "firebase";
// Your web app's Firebase configuration
var firebaseConfig = {
  //   apiKey: process.env.FIREBASE_API_KEY,
  apiKey: "AIzaSyAd3x8s7QtplDS-TNxpNUtubO_YvFTPyWg",
  authDomain: "uoft-petition.firebaseapp.com",
  databaseURL: "https://uoft-petition.firebaseio.com",
  projectId: "uoft-petition",
  storageBucket: "uoft-petition.appspot.com",
  messagingSenderId: "890256050524",
  appId: "1:890256050524:web:4cbfce494b1cf8793d1999",
};
// Initialize Firebase
try {
  firebase.initializeApp(firebaseConfig);
} catch (err) {
  if (!/already exists/.test(err.message)) {
    console.error("Firebase initialization error", err.stack);
  }
}

export default firebase;
