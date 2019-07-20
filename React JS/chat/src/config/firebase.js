import * as firebase from 'firebase';
import 'firebase/firestore';
var firebaseConfig = {
    apiKey: "AIzaSyAqNbnFDAsD0j299h5Arak3eP8tt7nFD9k",
    authDomain: "chatapp-6727.firebaseapp.com",
    databaseURL: "https://chatapp-6727.firebaseio.com",
    projectId: "chatapp-6727",
    storageBucket: "",
    messagingSenderId: "1019002653021",
    appId: "1:1019002653021:web:83aa990b0e4cb5c1"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const auth = firebase.auth()
const db = firebase.firestore()
function login(email, password) {
    return auth.signInWithEmailAndPassword(email, password)
}
function register(email, password) {
    return new Promise((resolve, reject) => {
        auth.createUserWithEmailAndPassword(email, password).then((user) => {
            db.collection("users").add({ email, createdAt: Date.now() }).then(() => {
                resolve({ message: "Registered Successfully" })
            })
                .catch(e => {
                    reject({ message: e.message })
                })
        }).catch(e => {
            reject({ message: e.message })
        })
    })
}
function getAllUsers() {
    return new Promise((resolve, reject) => {
        db.collection("users").get().then(snapshot => {
            const users = []
            snapshot.forEach(elem => {
                if (elem.data().email) {
                    users.push({ email: elem.data().email, _id: elem.id })
                }
            })
            resolve(users)
        })
    })
}
export { login, register, firebase }