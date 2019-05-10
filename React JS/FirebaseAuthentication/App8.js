import React, { Component } from 'react';
import fire from './Authentication/firebase';
import './Authentication/Login.css';

export default class App8 extends Component {
    constructor() {
        super();
        this.state = {
            user: {},
            email: "",
            password: "",
            isLogin: false,
            count: null
        }
        this.afterAuth = this.afterAuth.bind(this);
        this.login = this.login.bind(this);
        this.register = this.register.bind(this);
        this.logOut = this.logOut.bind(this);
    }
    login() {
        const { email, password, isLogin } = this.state;
        this.setState({ isLogin: true })
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                const uid = fire.auth().currentUser.uid;
                fire.database().ref(`users/${uid}/counts/`).once("value", snap => {
                    let data = snap.val();
                    let count = data.count;
                    count++;
                    this.setState({ count })
                    const obj = {
                        count: count
                    }
                    console.log(obj)
                    fire.database().ref(`users/${uid}/counts/`).set(obj)
                })
            })
            .catch(() => {

            })
    }
    register() {
        const { email, password, isLogin } = this.state;
        this.setState({ isLogin: true })
        const count = 1;
        this.setState({ count })
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const obj = { email, password };
                const obj2 = { count }
                const UID = fire.auth().currentUser.uid;
                fire.database().ref("users/" + UID).set(obj) && fire.database().ref(`users/${UID}/counts`).set(obj2)
                    .then(() => {
                        console.log("Register Successful")
                    })
            })
            .catch(() => {

            })
    }
    afterAuth() {
        fire.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user })
            }
            else {
                this.setState({ user: null })
            }
        })
    }
    componentDidMount() {
        this.afterAuth();
    }
    renderLogin() {
        return (
            <div className="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" id="uname" placeholder="Enter Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <label for="psw"><b>Password</b></label>
                <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
    logOut() {
        fire.auth().signOut();
        this.setState({ isLogin: false, count: null })
        console.log("LogOut Successful")
    }
    renderHome() {
        return (
            <div className="container" style={{textAlign:"center"}}>
                <h1>Home</h1>
                <p>Number of time you login is : {this.state.count}</p>
                <button onClick={this.logOut}>LogOut</button>
            </div>
        )
    }
    render() {
        const { isLogin } = this.state;
        return (
            <div>
                {
                    isLogin ? this.renderHome() : this.renderLogin()
                }
            </div>
        );
    }
}