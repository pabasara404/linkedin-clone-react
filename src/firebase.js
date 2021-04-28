import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBTi2oi4PcV-ug2Ev-cyiPXzs6OiWKa-xg",
    authDomain: "linkedin-clone-5f8a2.firebaseapp.com",
    projectId: "linkedin-clone-5f8a2",
    storageBucket: "linkedin-clone-5f8a2.appspot.com",
    messagingSenderId: "551216342498",
    appId: "1:551216342498:web:7d244478ea9d15e34905bb"
  };

  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};
  