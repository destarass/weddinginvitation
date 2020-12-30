import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyAkTp11Z4AjUokbAYz0g-vljt3MZQ_cM7Q",
  authDomain: "wedding-fazaannisa.firebaseapp.com",
  databaseURL: "https://wedding-fazaannisa.firebaseio.com",
  projectId: "wedding-fazaannisa",
  storageBucket: "wedding-fazaannisa.appspot.com",
  messagingSenderId: "471822434146",
  appId: "1:471822434146:web:a4d6caa0e284e12fc9363b",
  measurementId: "G-VB3J6FGC6L",
});

var db = firebaseApp.firestore();

export { db };
