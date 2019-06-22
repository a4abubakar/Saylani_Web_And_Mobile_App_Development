import React, { Component } from 'react';
import './form.css';
// import fire from '../config/firebase'

export default class RestaurantRegister extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            gender: null,
            age: null,
            country: "",
            city: "",
            password: "",
            image: null
        }
        this.login = this.login.bind(this)
        this.register = this.register.bind(this)
    }
    login() {
        // const { fullName, email, gender, age, gender, age, country, city, password } = this.state;
    }
    register() {
        // const { fullName, email, gender, age, gender, age, country, city, password } = this.state;

    }
    render() {
        return (
            <div>
                <div className="container">
                    <label for="uname"><b>Full Name : </b></label>
                    <input type="text" id="uname" placeholder="Enter your fullname" onChange={(e) => { this.setState({ fullName: e.target.value }) }} />
                    <label for="eml"><b>Email : </b></label>
                    <input type="text" id="eml" placeholder="Enter your email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                    <label for="gen"><b>Gender : </b></label>
                    <input type="text" id="gen" placeholder="Enter your gender" onChange={(e) => { this.setState({ gender: e.target.value }) }} />
                    <label for="age"><b>Age : </b></label>
                    <input type="text" id="age" placeholder="Enter your age" onChange={(e) => { this.setState({ age: e.target.value }) }} />
                    <label for="coun"><b>Country : </b></label>
                    <input type="text" id="coun" placeholder="Enter your country" onChange={(e) => { this.setState({ country: e.target.value }) }} />
                    <label for="city"><b>City : </b></label>
                    <input type="text" id="city" placeholder="Enter your city" onChange={(e) => { this.setState({ city: e.target.value }) }} />
                    <label for="psw"><b>Password</b></label>
                    <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                    <label for="img"><b>Certificate</b></label><br/><br/>
                    <input type="file" id="img" placeholder="Select Image" onClick={(e) => { this.setState({ image: e.target.value }) }} />
                    <button onClick={this.register}>Register</button>
                </div>
            </div>
        )
    }
}