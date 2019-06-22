import * as firebase from 'firebase';

var firebaseConfig = {
    apiKey: "AIzaSyB3P9_2hUGNDZ9Ku4pfEzdU2qyn59Xu-p8",
    authDomain: "food-panda-5262.firebaseapp.com",
    databaseURL: "https://food-panda-5262.firebaseio.com",
    projectId: "food-panda-5262",
    storageBucket: "food-panda-5262.appspot.com",
    messagingSenderId: "830597192251",
    appId: "1:830597192251:web:b1bb7759658c843c"
};
// Initialize Firebase
// firebase.initializeApp(firebaseConfig);

const fire = firebase.initializeApp(firebaseConfig);
export default fire;