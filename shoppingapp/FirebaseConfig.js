import * as firebase from 'firebase';
const firebaseConfig = {
    apiKey: "AIzaSyAdpF_LhLOKxl4VtPQbzziJFNA91brzGkQ",
    authDomain: "softwarepatternsassignment.firebaseapp.com",
    databaseURL: "https://softwarepatternsassignment.firebaseio.com",
    projectId: "softwarepatternsassignment",
    storageBucket: "softwarepatternsassignment.appspot.com",
    messagingSenderId: "345082848276",
    appId: "1:345082848276:web:8679eeb58fefa73234f301",
    measurementId: "G-EQHC8K0J89"
}

let Firebase = firebase.initializeApp(firebaseConfig)

export default Firebase