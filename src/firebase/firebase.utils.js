import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBAcVcaheJ23GkLHvEBnh1fsBZey4GS-gs",
    authDomain: "crwn-db-81f38.firebaseapp.com",
    databaseURL: "https://crwn-db-81f38.firebaseio.com",
    projectId: "crwn-db-81f38",
    storageBucket: "crwn-db-81f38.appspot.com",
    messagingSenderId: "562972781567",
    appId: "1:562972781567:web:aac5fcece18409042195ca",
    measurementId: "G-SP5F85ZJLK"
  };

  firebase.initializeApp(config);

  export const createUserProfileDocument = async(userAuth, additionalData) => {
      if(!userAuth) return;

      const userRef = firestore.doc(`users/${userAuth.uid}`);
      const snapShot = await userRef.get();
      if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();
        try {
          await userRef.set({
            displayName,
            email,
            createdAt,
            ...additionalData
          });
        } catch (error) {
          console.log('error creating user', error.message);
        }
      }
    
      return userRef;
    }; 

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
