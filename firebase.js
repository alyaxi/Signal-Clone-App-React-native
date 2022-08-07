import firebase from 'firebase/app'
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBiPvhQoYmdlE7x0_7p94brcfs_MECQS60",
  authDomain: "singal-clone-36efc.firebaseapp.com",
  projectId: "singal-clone-36efc",
  storageBucket: "singal-clone-36efc.appspot.com",
  messagingSenderId: "712238616812",
  appId: "1:712238616812:web:3ac840c4e92567f0f155c9",
};
let app;

if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app();
}


const db = app.firestore();
const auth = firebase.auth();

export { auth, db };