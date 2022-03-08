// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = { 
  apiKey: 'AIzaSyAIpO8LNL4OBeg-MoeBI8piGwldy2dYnUM',
  authDomain: 'instagram2-d3e89.firebaseapp.com',
  projectId: 'instagram2-d3e89',
  storageBucket: 'instagram2-d3e89.appspot.com',
  messagingSenderId: '1039883521772',
  appId: '1:1039883521772:web:4e36652723a4e28e689fc9',
}

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp()
const db = getFirestore()
const storage = getStorage()

export {app, db, storage}