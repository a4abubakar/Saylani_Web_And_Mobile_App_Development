import React, { Component } from 'react';
import './form.css';

export default class RestaurantLogin extends Component {
    render(){
        return(
            <div className="container">
                <label for="uname"><b>Email</b></label>
                <input type="text" id="uname" placeholder="Enter Email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <label for="psw"><b>Password</b></label>
                <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <button onClick={this.login}>Login</button>
            </div>
        )
    }
}