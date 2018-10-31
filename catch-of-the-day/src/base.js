import Rebase from 're-base'
import firebase from 'firebase'


// configure the firebase
const firebaseApp = firebase.initializeApp({  
  apiKey: "AIzaSyA-rxh89Ehdfy3ddbTK3CCtg09p8J04cj8",
  authDomain: "catch-of-the-day-ks-29806.firebaseapp.com",
  databaseURL: "https://catch-of-the-day-ks-29806.firebaseio.com"
})

// rebase binding to firebase
const base = Rebase.createClass(firebaseApp.database())


// named export
export { firebaseApp }

// default export
export default base
