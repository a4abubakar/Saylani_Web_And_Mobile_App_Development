import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Restaurants from './Restaurants'
import MyRequests from './MyRequests'
import { remove_user } from '../../Redux/action'
import { connect } from 'react-redux';
// import "react-tabs/style/react-tabs.css";

class Home extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0,    //State use for changing tabs
        };
        this.logOut = this.logOut.bind(this)
    }
    logOut() {
        this.props.delete_user()
    }
    render() {
        const token = localStorage.getItem("token")
        if (token === null) {
            return (<Redirect to="/" />)
        }
        return (
            <div>
                <div className="navbar">
                    <Link to="/" onClick={this.logOut}>Log Out</Link>
                </div>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Restaurants</Tab>
                        <Tab>My Requests</Tab>
                    </TabList>
                    <TabPanel style={{ textAlign: "center" }}><Restaurants /></TabPanel>
                    <TabPanel style={{ textAlign: "center" }}><MyRequests /></TabPanel>
                </Tabs>
            </div>
        );
    }
}
const mapDispatchToProps = dispatch => {
    return {
        delete_user: () => dispatch(remove_user())
    }
}
export default connect(null, mapDispatchToProps)(Home);