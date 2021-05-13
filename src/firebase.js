import dotenv from 'dotenv';
import firebase from "firebase";
import "firebase/auth";
dotenv.config();

firebase.initializeApp({
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  databaseURL: process.env.REACT_APP_DATABASE_URL,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId:  process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_APP_ID,
  measurementId: process.env.REACT_APP_MEASUREMENT_ID
  });

  export const auth = firebase.auth();
  const googleProvider = new firebase.auth.GoogleAuthProvider()
  export const signIn = () => {
      auth.signInWithPop(googleProvider)
      .then((res) => {
          console.log(res.user);
      })
      .catch((err) => {
          console.log(err.message);
      });
  }

export default firebase;