import * as firebase from 'firebase/app';
import 'firebase/auth';

const app = firebase.initializeApp({
  apiKey: "AIzaSyBMow1ngsOz_RwerAKJDZ-l9rOhtx2vkRY",
  authDomain: "cashcalpersonal.firebaseapp.com",
  databaseURL: "https://cashcalpersonal.firebaseio.com",
  projectId: "cashcalpersonal",
  storageBucket: "cashcalpersonal.appspot.com",
  messagingSenderId: "503814664445",
  appId: "1:503814664445:web:cb70ffa13bf81aed"
});

export default app;
