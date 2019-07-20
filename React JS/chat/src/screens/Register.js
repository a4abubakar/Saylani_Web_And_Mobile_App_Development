import React, { Component } from 'react';
import login from '../config/firebase'
import register from '../config/firebase'

class Login extends Component {
    async login() {
        const { email, password } = this.state;

        await this.login(email, password)
        
    }
    signup() {
        const {email,password} =this.state;
        await this.register(email,password)
        this.history.push("Login")
    }
    render() {
        return (
            <div>
                Email : <input type="email" onChange={(e)=>{this.setState({email:e.target.value})}}/>
                Password : <input type="password" onChange={(e)=>{this.setState({password:e.target.value})}}/>

                <button onClick={this.signup.bind(this)}>Register</button>
            </div>
        )
    }
}