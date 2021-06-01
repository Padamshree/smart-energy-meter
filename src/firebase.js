import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyC4PAIo12jdcpl2yJ7F6Z89N-VIyAfzvWY",
  authDomain: "smart-energy-meter-iot-9e3d8.firebaseapp.com",
  databaseURL: "https://smart-energy-meter-iot-9e3d8-default-rtdb.firebaseio.com",
  projectId: "smart-energy-meter-iot-9e3d8",
  storageBucket: "smart-energy-meter-iot-9e3d8.appspot.com",
  messagingSenderId: "95322830552",
  appId: "1:95322830552:web:263904bedeac24d83e49ad",
  measurementId: "G-QDF53E32QT"
  // apiKey: process.env.REACT_APP_API_KEY,
  // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  // databaseURL: process.env.REACT_APP_DATABASE_URL,
  // projectId: process.env.REACT_APP_PROJECT_ID,
  // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  // appId: process.env.REACT_APP_APP_ID,
  // measurementId: process.env.REACT_APP_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);

export default firebase;