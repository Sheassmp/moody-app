import firebase from "firebase/app";
import "firebase/messaging";
import localforage from "localforage";

const firebaseCloudMessaging = {
  //check whether token available
  tokenInLocalForage: async () => {
    return localforage.getItem("fcm_token");
  },
  
  //init firebase app
  init: async function() {
    if (!firebase.apps.length) {
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
    
      try {
        const messaging = firebase.messaging();
        const tokenInLocalForage = await this.tokenInLocalForage();
        //if FCM token exists return token
        if (tokenInLocalForage !== null) {
          return tokenInLocalForage;
        }
        //request notification permission from browser
        const status = await Notification.requestPermission();
        
        if (status && status === "granted") {
          //getting token from FCM
          const fcm_token = await messaging.getToken();
          
          if (fcm_token) {
            //setting FCM token in indexed db using localforage
            localforage.setItem("fcm_token", fcm_token);
            return fcm_token;
          }
        }
      } catch (error) {
        console.error(error);
        return null;
      }
    }
  }
};

export { firebaseCloudMessaging};
