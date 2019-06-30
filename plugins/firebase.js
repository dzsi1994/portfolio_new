import * as firebase from 'firebase'
import 'firebase/storage'
import 'firebase/database'

let firebaseApp = null

const config = {
  apiKey: 'AIzaSyBEJTkRWwm73urmi_O47CRWSc8eVQ7tfYU',
  authDomain: 'portfolio-2c1cd.firebaseapp.com',
  databaseURL: 'https://portfolio-2c1cd.firebaseio.com',
  projectId: 'portfolio-2c1cd',
  storageBucket: 'portfolio-2c1cd.appspot.com',
  messagingSenderId: '847012786670',
  appId: '1:847012786670:web:06995058cecfad3c'
}

if (!firebase.apps.length) {
  firebase.initializeApp(config)
}

const db = firebase.database()
const storage = firebase.storage()

export { firebase, storage, db }
