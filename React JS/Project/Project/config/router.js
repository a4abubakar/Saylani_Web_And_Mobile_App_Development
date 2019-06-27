import React from 'react';
import Home from '../Home';
import '../Home.css'
import User from '../User'
import Restaurant from '../Restaurant'
import Dashboard from '../Dashboard/User/Home'
import ResDashboard from '../Dashboard/Restaurant/Home'
import Detail from '../Dashboard/User/Detail'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

export default class Navigations extends React.Component {
    constructor() {
        super()
        this.state = {
            logIn: false
        }
    }
    componentWillMount(){
        const token = localStorage.getItem("token")
        console.log(token)
        if (token !== null) {
            this.setState({ logIn: true })
        }
    }
    withoutlogin() {
        return (
            <Router>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                    <Link to="/restaurant">Restaurant</Link>
                </div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/restaurant" component={Restaurant} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
    logOut() {
        localStorage.setItem("token", null)
        this.setState({ logIn: false })
    }
    withlogin() {
        return (
            <Router>
                <div className="navbar">
                    <Link to="/" onClick={this.logOut()}>Log Out</Link>
                </div>
                <div>
                    <Route exact path="/" component={Home} />
                    <Route path="/user" component={User} />
                    <Route path="/restaurant" component={Restaurant} />
                    <Route path="/dashboard" component={Dashboard} />
                </div>
            </Router>
        )
    }
    render() {
        // if (this.state.logIn === true) {
            return (
                <Router>
                    {/* <div className="navbar">
                        <Link to="/" onClick={this.logOut()}>Log Out</Link>
                    </div> */}
                    <div>
                        <Route exact path="/" component={Home} />
                        <Route path="/user" component={User} />
                        <Route path="/restaurant" component={Restaurant} />
                        <Route path="/dashboard" component={Dashboard} />
                        <Route path="/resdashboard" component={ResDashboard} />
                        <Route path="/detail" component={Detail} />
                    </div>
                </Router>
            )
        // }
        // else {
        //     return (
        //         <Router>
        //             <div className="navbar">
        //                 <Link to="/">Home</Link>
        //                 <Link to="/user">User</Link>
        //                 <Link to="/restaurant">Restaurant</Link>
        //             </div>
        //             <div>
        //                 <Route exact path="/" component={Home} />
        //                 <Route path="/user" component={User} />
        //                 <Route path="/restaurant" component={Restaurant} />
        //                 <Route path="/dashboard" component={Dashboard} />
        //             </div>
        //         </Router>
        //     )
        // }
    }
}