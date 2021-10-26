// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC54ybrbOgjmOoe68FZxzcNQRw6Yfey69A",
  authDomain: "insta-2-yt-44c60.firebaseapp.com",
  projectId: "insta-2-yt-44c60",
  storageBucket: "insta-2-yt-44c60.appspot.com",
  messagingSenderId: "1072365677022",
  appId: "1:1072365677022:web:39fe1c2e1a50033d10154f"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();

export {app, db, storage}