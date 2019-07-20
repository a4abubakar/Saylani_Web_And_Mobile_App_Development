import React, { Component } from 'react';
import login from '../config/firebase'
import signup from '../config/firebase'

class Login extends Component {
    async login() {
        const { email, password } = this.state;

        await this.login(email, password)

    }
    signup() {
        const { email, password } = this.state;
        await this.signup(email, password)
    }
    render() {
        return (
            <div>
                Email : <input type="email" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                Password : <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />

                <button onClick={this.login.bind(this)}>Login</button>
            </div>
        )
    }
}