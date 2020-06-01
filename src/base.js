import Rebase from "re-base";
import firebase from "firebase/app";
import "firebase/database";

// Modifier les valeurs en XXXX
const firebaseApp = firebase.initializeApp({
  apiKey: "XXXX",
  authDomain: "XXXX",
  databaseURL: "XXXX",
});

const base = Rebase.createClass(firebaseApp.database());

// This is a named export
export { firebaseApp };

// this is a default export
export default base;
