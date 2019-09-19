import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAe8C-_ivaQqnPNiPGPUb2MmAkjqhu0HZM",
    authDomain: "vuetify-app-ba6e5.firebaseapp.com",
    databaseURL: "https://vuetify-app-ba6e5.firebaseio.com",
    projectId: "vuetify-app-ba6e5",
    storageBucket: "vuetify-app-ba6e5.appspot.com",
    messagingSenderId: "300388909421",
    appId: "1:300388909421:web:fd0a356a8341b0f2be9a64"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore();

  db.settings({timestampsInSnapshots : true});//setting the timestamps in snapshots to true

  export default db;