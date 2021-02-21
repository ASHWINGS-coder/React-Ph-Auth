# react-ph-auth

To get this project functioning do create a new firebase project (link : https://firebase.google.com/ ) and put your credentials in firebase.js  file

import firebase from 'firebase'

const config = {
    apiKey: "",
    authDomain: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: "",
    appId: ""
}

firebase.initializeApp(config)

export default firebase
