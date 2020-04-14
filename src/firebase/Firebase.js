import firebase from 'react-native-firebase';
import 'firebase/firestore';
require('firebase/auth');
import {
  API_KEY,
  AUTH_DOMAIN,
  DATABASE_URL,
  PROJECT_ID,
  STORAGE_BUSKET,
  MESSAGING_SeENDER_ID,
  APP_ID,
} from 'react-native-dotenv';

const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: AUTH_DOMAIN,
  databaseURL: DATABASE_URL,
  projectId: PROJECT_ID,
  storageBucket: STORAGE_BUSKET,
  messagingSenderId: MESSAGING_SeENDER_ID,
  appId: APP_ID,
};

const Firebase = firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();
export default Firebase;
