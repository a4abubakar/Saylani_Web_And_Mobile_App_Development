import React, { Component } from 'react';
import './form.css';
import swal from 'sweetalert';
import fire from '../config/firebase'

export default class RestaurantRegister extends Component {
    constructor() {
        super()
        this.state = {
            fullName: "",
            email: "",
            country: "",
            city: "",
            password: "",
            image: "",
            category: "Select Category",
        }
        this.register = this.register.bind(this)
    }
    register() {
        const { fullName, email, country, city, password, category, image } = this.state;
        // console.log(image)
        document.getElementById("loaders").style.display = "block";
        fire.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                const obj = {
                    fullName,
                    email,
                    country,
                    city,
                    category,
                    image
                }
                const uid = fire.auth().currentUser.uid;
                let storageRef = fire.storage().ref().child(`resturantimage/${image.name}`)
                storageRef.put(image)
                    .then((snap) => {
                        snap.ref.getDownloadURL().then((snapUrl) => {
                            obj.image = snapUrl;
                            fire.database().ref("restaurants/" + uid).set(obj)
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
                                            category: "Select Category",
                                            image: "",
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
                    <label for="coun"><b>Country : </b></label>
                    <input type="text" id="coun" placeholder="Enter your country" onChange={(e) => { this.setState({ country: e.target.value }) }} value={this.state.country} />
                    <label for="city"><b>City : </b></label>
                    <input type="text" id="city" placeholder="Enter your city" onChange={(e) => { this.setState({ city: e.target.value }) }} value={this.state.city} />
                    <label for="Category">Category</label>
                    <select id="Category" required onChange={(e) => { this.setState({ category: e.target.value }) }} value={this.state.category}>
                        <option selected value="">Select Category</option>
                        <option value="BBQ">BBQ</option>
                        <option value="Pizza">Pizza</option>
                        <option value="FastFood">Fast Food</option>
                        <option value="Chineese">Chineese</option>
                    </select>
                    <label for="psw"><b>Password</b></label>
                    <input type="password" id="psw" placeholder="Enter Password" onChange={(e) => { this.setState({ password: e.target.value }) }} value={this.state.password} />
                    <label for="img"><b>Certificate</b></label>
                    <input type="file" id="img" placeholder="Select Image" onChange={(e) => { this.setState({ image: e.target.files[0] }) }}/>
                    <button onClick={this.register}>Register</button>
                </div>
                <div className="col-md-12">
                    <div className="loader" id="loaders"></div>
                </div>
            </div >
        )
    }
}