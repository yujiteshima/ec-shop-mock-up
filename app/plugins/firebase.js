// import firebase from 'firebase'
// import firebaseui from 'firebaseui-ja'
import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'
import 'firebase/database'
// import config from '~/firebase.config';

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyBBr9TUwA6Pq_uzNKQYcNaBxc7Ge8ImepY',
    authDomain: 'ec-shop-mock-up.firebaseapp.com',
    databaseURL: 'https://ec-shop-mock-up.firebaseio.com',
    projectId: 'ec-shop-mock-up',
    storageBucket: 'ec-shop-mock-up.appspot.com',
    messagingSenderId: '1049935503390',
    appId: '1:1049935503390:web:b23c9bd07a6e6799'
  })
}
export const authProviders = {
  Google: firebase.auth.GoogleAuthProvider.PROVIDER_ID,
  Facebook: firebase.auth.FacebookAuthProvider.PROVIDER_ID,
  Twitter: firebase.auth.TwitterAuthProvider.PROVIDER_ID,
  Github: firebase.auth.GithubAuthProvider.PROVIDER_ID,
  Email: firebase.auth.EmailAuthProvider.PROVIDER_ID,
  Phone: firebase.auth.PhoneAuthProvider.PROVIDER_ID
  // Anonymous: firebaseui.auth.AnonymousAuthProvider.PROVIDER_ID
}
export const auth = firebase.auth()
export const db = firebase.database()
export const store = firebase.firestore()
// export default firebase
