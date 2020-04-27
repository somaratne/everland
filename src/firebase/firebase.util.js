import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const config = {
  apiKey: "AIzaSyA_gW48JtF1ehsrScU3nJGTlBNHdthC50M",
  authDomain: "everland-db-c343e.firebaseapp.com",
  databaseURL: "https://everland-db-c343e.firebaseio.com",
  projectId: "everland-db-c343e",
  storageBucket: "everland-db-c343e.appspot.com",
  messagingSenderId: "519286985811",
  appId: "1:519286985811:web:88a7c7f3c7d75fcc7722a6"
};

firebase.initializeApp(config);

export const createUserProfileDoc = async (userAuth, additionalData) => {
  if (!userAuth) return;
  else {
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = userRef.get();
    if (!snapShot.exists) {
      const { displayName, email } = userAuth;
      const createdOn = new Date();
      try {
        await userRef.set({
          displayName,
          email,
          createdOn,
          ...additionalData
        });
      } catch (err) {
        console.error(err.message);
      }
    }
    return userRef;
  }
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
