import React, { Component } from 'react';
import './form.css';
import swal from 'sweetalert';
import { Link,Redirect } from 'react-router-dom'
import { update_user } from '../Redux/action'
import { connect } from 'react-redux';
import fire from '../config/firebase';

class UserLogin extends Component {
    constructor() {
        super()
        this.state = {
            email: "",
            password: "",
            login: false
        }
        this.login = this.login.bind(this);
    }
    login() {
        document.getElementById("loaders").style.display = "block";
        const { email, password } = this.state;
        fire.auth().signInWithEmailAndPassword(email, password)
            .then((user) => {
                document.getElementById("loaders").style.display = "none";
                swal({
                    title: "Welcome",
                    text: "Login Successfull",
                    icon: "success",
                    button: "Done"
                }).then(() => {
                    localStorage.setItem("token", "logged In")
                    this.setState({ email: "", password: "", login: true })
                    const uid = fire.auth().currentUser.uid;
                    localStorage.setItem("uid",uid)
                    fire.database().ref("users/" + uid).once("value", snap => {
                        let user = snap.val();
                        console.log(user)
                        this.props.store_user(user)
                    })
                })
            })
            .catch((error) => {
                document.getElementById("loaders").style.display = "none";
                swal({
                    title: "Error",
                    text: error.message,
                    icon: "warning",
                    button: "Ok"
                });
            })
    }
    render() {
        const token = localStorage.getItem("token")
        console.log(token)
        if (this.state.login === false) {
            return (
                <div>
                    <div className="container">
                        <label for="uname"><b>Email</b></label>
                        <input type="text" id="uname" placeholder="Enter Email" onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} />
                        <label for="psw"><b>Password</b></label>
                        <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} />
                        <button onClick={this.login}>Login</button>
                    </div>
                    <div className="col-md-12">
                        <div className="loader" id="loaders"></div>
                    </div>
                </div>
            )
        }
        else {
            return (<Redirect to="/dashboard" />)
        }
    }
}
const mapStateToProps = state => {
    return {
        user: state.user
    }
}

const mapDispatchToProps = dispatch => {
    return {
        store_user: (user) => dispatch(update_user(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(UserLogin);