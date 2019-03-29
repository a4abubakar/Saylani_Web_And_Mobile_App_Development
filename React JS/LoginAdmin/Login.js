import React, { Component } from 'react';
import swal from 'sweetalert';
class Login extends Component {
    state = {
        email: "​",
        password: "",
        isLogin: false,
        user: [
            { firstname: "abubaker", lastname: "siddiq", email: "abubakarsadiq6727@gmail.com", salary: 1500, date: Date() },
            { firstname: "absar", lastname: "ali", email: "absarali@gmail.com", salary: 2000, date: Date() }
        ],
        firstname: "",
        lastname: "",
        email: "",
        salary: ""
    }
    loginUser() {
        const { email, password } = this.state;
        console.log(email, password)
        if (email === "admin@domain.com" && password === "123") {
            swal({
                title: "Login",
                text: "Welcome User",
                icon: "success",
            }).then(() => {
                this.setState({ isLogin: true })
            })
        }
        else {
            swal({
                title: "Login Failed",
                text: "Email or Password is Incorrect",
                icon: "warning",
            })
        }
    }
    renderLoginScreen() {
        return (
            <div>
                <h1>Login</h1>
                <p>Email</p>
                <input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} />
                <p>Password</p>
                <input type="password" onChange={(e) => { this.setState({ password: e.target.value }) }} />
                <button className="buttonFull" onClick={() => this.loginUser()}>Login</button>
            </div>
        )
    }

    edit(i, v) {
        const { user } = this.state;
        let fn = prompt("Edit first name", v.firstname);
        console.log(fn)
        let ln = prompt("Edit first name", v.lastname);
        console.log(ln)
        let en = prompt("Edit first name", v.email);
        console.log(en)
        let sal = prompt("Edit first name", v.salary);
        console.log(sal)
        let dt = Date();
        console.log(dt)
        let obj = {
            firstname: fn,
            lastname: ln,
            email: en,
            salary: sal,
            date: dt
        }
        user.map((value, index) => {
            if (index == i) {
                this.setState(user.splice(index, 1, obj));
            }
        })
        swal({
            title: "Updated",
            text: "Record has been updated",
            icon: "success",
        })

    }
    delete(i) {
        const { user } = this.state;
        user.map((value, index) => {
            if (index === i) {
                this.setState(user.splice(i, 1));
            }
        })
    }
    add() {
        const { firstname, lastname, email, salary, user, isAddEmployee } = this.state;
        const obj = {
            firstname,
            lastname,
            email,
            salary,
            date: Date()
        }
        user.push(obj);
        swal({
            title: "Added",
            text: "Record has been added successfylly",
            icon: "success",
        }).then(() => {
            this.setState({ user, firstname: "", lastname: "", email: "", salary: "", isAddEmployee: !isAddEmployee });
        })
    }
    logOut() {
        swal({
            title: "Log Out",
            icon: "success",
        }).then(() => {
            this.setState({ isLogin: false, email: "", password: "" })
        })
    }
    renderUserScreen() {
        return (
            <div>
                <div>
                    <h1>Welcome</h1>
                    <button className="buttonHalf" onClick={() => { this.setState({ isAddEmployee: true }) }}>Add User</button>
                    <button className="buttonHalf" onClick={() => this.logOut()}>LogOut</button>
                </div>
                <div>
                    <table id="customers">
                        <thead>
                            <tr>
                                <th>First Name</th>
                                <th>Last Name</th>
                                <th>Email</th>
                                <th>Salary</th>
                                <th>Date</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.user.map((v, i) => {
                                    return <tr>
                                        <td>{v.firstname}</td>
                                        <td>{v.lastname}</td>
                                        <td>{v.email}</td>
                                        <td>{v.salary}</td>
                                        <td>{v.date}</td>
                                        <td><button className="buttonHalf" onClick={this.edit.bind(this, i, v)}>Edit</button>
                                            <button className="buttonHalf" onClick={this.delete.bind(this, i, v)}>Delete</button></td>
                                    </tr>
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div >
        )
    }
    renderAddForm() {
        return <div>
            <p>First Name :<input type="text" onChange={(e) => { this.setState({ firstname: e.target.value }) }} /></p>
            <p>Last Name :<input type="text" onChange={(e) => { this.setState({ lastname: e.target.value }) }} /></p>
            <p>Email :<input type="text" onChange={(e) => { this.setState({ email: e.target.value }) }} /></p>
            <p>Salary :<input type="number" onChange={(e) => { this.setState({ salary: e.target.value }) }} /></p>
            <button className="buttonHalf" onClick={() => { this.add() }}>Add</button>
        </div>
    }
    render() {
        const { isLogin, isAddEmployee } = this.state;
        console.log(isLogin)
        return (
            <div>
                {!isLogin && this.renderLoginScreen()}
                {isLogin && !isAddEmployee && this.renderUserScreen()}
                {isLogin && isAddEmployee && this.renderAddForm()}
            </div>
        )
    }
}
export default Login;