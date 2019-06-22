import React, { Component } from 'react';
import './form.css';
import swal from 'sweetalert';
import fire from '../config/firebase'

export default class UserRegister extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            gender: "",
            age: "",
            country: "",
            city: "",
            password: "",
        }
        this.register = this.register.bind(this)
    }
    register() {
        document.getElementById("loaders").style.display = "block";
        const { fullName, email, gender, age, country, city, password } = this.state;
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const obj = {
                    fullName,
                    email,
                    gender, age,
                    country,
                    city
                }
                const UID = fire.auth().currentUser.uid;
                fire.database().ref("users/" + UID).set(obj)
                    .then(() => {
                        document.getElementById("loaders").style.display = "none";
                        swal({
                            title: "Welcome",
                            text: "Account Created",
                            icon: "success",
                            button: "Done"
                        }).then(() => {
                            this.setState({
                                fullName: "",
                                email: "",
                                gender: "",
                                age: "",
                                country: "",
                                city: "",
                                password: "",
                            })
                        })
                    })
                    .catch(() => {
                        console.log("Register Unsuccessful")
                    })
            })
    }
    render() {
        return (
            <div>
                <div className="container">
                    <label for="uname"><b>Full Name : </b></label>
                    <input type="text" id="uname" placeholder="Enter your fullname" onChange={(e) => { this.setState({ fullName: e.target.value }) }} value={this.state.fullName} />
                    <label for="eml"><b>Email : </b></label>
                    <input type="text" id="eml" placeholder="Enter your email" onChange={(e) => { this.setState({ email: e.target.value }) }} value={this.state.email} />
                    <label for="gen"><b>Gender : </b></label>
                    <input type="text" id="gen" placeholder="Enter your gender" onChange={(e) => { this.setState({ gender: e.target.value }) }} value={this.state.gender} />
                    <label for="age"><b>Age : </b></label>
                    <input type="number" id="age" placeholder="Enter your age" onChange={(e) => { this.setState({ age: e.target.value }) }} value={this.state.age} />
                    <label for="coun"><b>Country : </b></label>
                    <input type="text" id="coun" placeholder="Enter your country" onChange={(e) => { this.setState({ country: e.target.value }) }} value={this.state.country} />
                    <label for="city"><b>City : </b></label>
                    <input type="text" id="city" placeholder="Enter your city" onChange={(e) => { this.setState({ city: e.target.value }) }} value={this.state.city} />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} />
                    <button onClick={this.register}>Register</button>
                </div>
                <div className="col-md-12">
                    <div className="loader" id="loaders"></div>
                </div>
            </div>
        )
    }
}