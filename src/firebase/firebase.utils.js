import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config=
    {
        apiKey: "AIzaSyBxjUNgiwLGOUaeZoBZbNj_rLGxy2FMifA",
        authDomain: "crown-db-8e40c.firebaseapp.com",
        projectId: "crown-db-8e40c",
        storageBucket: "crown-db-8e40c.appspot.com",
        messagingSenderId: "95982475923",
        appId: "1:95982475923:web:ed8c8d05e67bd47096cb66",
        measurementId: "G-6TV38Y6MF3"
      };

export const createUserProfileDocument =async (userAuth, additionalData)=>{
  if(!userAuth) return;

  const userRef = firestore.doc(`/users/${userAuth.uid}`);
  const snapShot= await  userRef.get();

if(!snapShot.exists){
  const { displayName,email } =userAuth;
  const createAt = new Date();

  try{
await userRef.set({
  displayName,
  email,
  createAt,
  ...additionalData
})
  }catch(e){
console.log('Error creating user',e.message);
  }
}
return userRef;

}

      firebase.initializeApp(config);

      export const auth=firebase.auth();
      export const firestore=firebase.firestore();


      const provider =new firebase.auth.GoogleAuthProvider();
      provider.setCustomParameters({ prompt:'select_account'});
      export const signInWithGoogle =()=>auth.signInWithPopup(provider);

      export default firebase;