import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyBJZ-vng1KyVYwjNgOfP1WXw1T901cVqCk",
    authDomain: "auth-71d4f.firebaseapp.com",
    projectId: "auth-71d4f",
    storageBucket: "auth-71d4f.appspot.com",
    messagingSenderId: "420633845077",
    appId: "1:420633845077:web:e610a208e4fa3aa48de3dc"
  };

  const app = initializeApp(firebaseConfig);
  export const auth = getAuth(app)