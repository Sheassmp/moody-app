importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.9.1/firebase-messaging.js');

if(!firebase.apps.length) {
    firebase.initializeApp({
    apiKey: "AIzaSyBPFzE9Yyuq8dgHNQmheLTfLQ9B_tSyoyI",
    authDomain: "moody-469d1.firebaseapp.com",
    databaseURL: "https://moody-469d1.firebaseio.com",
    projectId: "moody-469d1",
    storageBucket: "moody-469d1.appspot.com",
    messagingSenderId: "62023031291",
    appId: "1:62023031291:web:c64a2c118086c73347935e",
    measurementId: "G-SZZ41J3VHJ"
    });

    firebase.messaging();

    //background notifications will be recieved here

    firebase.messaging().setBackgroundMessageHandler((payload) => 
    console.log('payload', payload));
}