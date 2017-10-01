import * as firebase from 'firebase';
var config = {
    apiKey: "AIzaSyATUf2p7_LlpE7J41118L9DgM1B-uXbzKQ",
    authDomain: "hackathon-d6ad7.firebaseapp.com",
    databaseURL: "https://hackathon-d6ad7.firebaseio.com",
    projectId: "hackathon-d6ad7",
    storageBucket: "hackathon-d6ad7.appspot.com",
    messagingSenderId: "984560617370"
  };
  firebase.initializeApp(config);
  export const ref = firebase.database().ref()
  export const get = firebase.database();
  export const tasksRef = ref.child('table');
  export const firebaseAuth = firebase.auth