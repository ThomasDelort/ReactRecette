import Rebase from 're-base'
import firebase from 'firebase/app'
import 'firebase/database'

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBcETqyHd-SmMrS5JpNFPsPE2vsENEogGk",
  authDomain: "recettes-fe7d7.firebaseapp.com",
  databaseURL: "https://recettes-fe7d7.firebaseio.com"
})

const base = Rebase.createClass(firebaseApp.database())

// This is a named export
export { firebaseApp }

// this is a default export
export default base
