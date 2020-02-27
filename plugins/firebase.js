
import firebase from 'firebase/app';
// import 'firebase/auth';        // for authentication
// import 'firebase/storage';     // for storage
// import 'firebase/database';    // for realtime database
// import 'firebase/firestore';   // for cloud firestore
// import 'firebase/messaging';   // for cloud messaging
// import 'firebase/functions';   // for cloud functions

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: "",
    measurementId: ""

};
// Initialize Firebase

let app = null;
if (!firebase.apps.length) {
    app = firebase.initializeApp(firebaseConfig);
}

export default firebase
