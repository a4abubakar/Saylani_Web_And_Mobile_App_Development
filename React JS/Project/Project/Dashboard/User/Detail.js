import React, { Component } from 'react';
import '../../assets/css/style.css'
import { remove_user } from '../../Redux/action'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import { connect } from 'react-redux';
import fire from '../../config/firebase';

class Detail extends Component {
    constructor(props) {
        super(props)
        this.state = {
        }
        this.logOut = this.logOut.bind(this)
        this.deliver = this.deliver.bind(this)
    }
    logOut() {
        this.props.delete_user()
    }
    deliver(){
        let resUid = this.props.location.state.data.uid
        let uid = localStorage.getItem("uid")
        let obj = {uid, status:"Pending",restaurant:this.props.location.state.data.uid}
        fire.database().ref(`restaurants/orders/${uid}/`).push(obj) && fire.database().ref(`users/${uid}/orders/${resUid}`).push(obj) && fire.database().ref(`restaurants/${resUid}/orders/${uid}`).push(obj)
    }
    render() {
        console.log("props", this.props.location.state.data)
        return (
            <div>
                <div className="navbar">
                    <Link to="/" onClick={this.logOut}>Log Out</Link>
                </div>
                <div style={{textAlign:"center"}}>
                    <h1>Detail</h1>
                </div>
                <div className="card-group" id="profile" style={{textAlign:"center"}}>
                    <div className="card" >
                        <img className="card-img-top" src={this.props.location.state.data.image} height="300px" style={{borderRadius:"150px", width:"300px", margin:"0px auto;"}} alt="Card image cap"/>
                            <div className="card-body">
                                <h5 className="card-title">{this.props.location.state.data.fullName}</h5>
                                <p className="card-text">Category : {this.props.location.state.data.category}</p>
                                <p className="card-text">Email : {this.props.location.state.data.email}</p>
                                <p className="card-text">City : {this.props.location.state.data.city}</p>
                                <p className="card-text">Country : {this.props.location.state.data.country}</p>
                                <button type="button" class="btn btn-primary mb-2" onClick={this.deliver}>Deliver</button>
                                <button type="button" class="btn btn-primary mb-2">Chat</button>
                            </div>
                </div>
                    </div>
                </div>
                )
            }
        }
const mapDispatchToProps = dispatch => {
    return {
                    delete_user: () => dispatch(remove_user())
            }
        }
export default connect(null, mapDispatchToProps)(Detail);