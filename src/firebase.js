import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBKgWcbAa30RU4U-CHMfFFZ4rqBodEM1Vk",
    authDomain: "super-octo-spork.firebaseapp.com",
    projectId: "super-octo-spork",
    storageBucket: "super-octo-spork.appspot.com",
    messagingSenderId: "466227159835",
    appId: "1:466227159835:web:fa005d102b7c496db4e9be"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export { db };