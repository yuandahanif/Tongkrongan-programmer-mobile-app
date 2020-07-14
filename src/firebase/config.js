import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';

const firebaseConfig = {
  production: false,
  apiKey: ' AIzaSyC4L3IUeUv7CAAz4CiFeVRnUFbBQzDhySw',
  authDomain: 'tongkrongan-programmer.firebaseapp.com',
  databaseURL: 'https://tongkrongan-programmer.firebaseio.com',
  projectId: 'tongkrongan-programmer',
  storageBucket: 'gs://tongkrongan-programmer.appspot.com',
  messagingSenderId: '664637869396',
  appId: '1:664637869396:android:65cfb9927f31df42a18cc1',
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}

export {firebase};
