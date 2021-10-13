import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAmL20VgVrpwjYXh3VKO1cRPOUrdd68YiI",
    authDomain: "movie-b8533.firebaseapp.com",
    projectId: "movie-b8533",
    storageBucket: "movie-b8533.appspot.com",
    messagingSenderId: "472754306893",
    appId: "1:472754306893:web:352c4074a300f6781f4104",
    measurementId: "G-XXZBBV63YH"
  };
firebase.initializeApp(firebaseConfig);
export const storage = firebase.storage();
  // export default storage;