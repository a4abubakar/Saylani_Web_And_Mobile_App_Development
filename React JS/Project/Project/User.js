import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Registration from './Registration/User'
import Login from './Login/User'
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import "react-tabs/style/react-tabs.css";

export default class User extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0,    //State use for changing tabs
        };
    }
    render() {
        return (
            <div>
                <div className="navbar">
                    <Link to="/">Home</Link>
                    <Link to="/user">User</Link>
                    <Link to="/restaurant">Restaurant</Link>
                </div>
                <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                    <TabList>
                        <Tab>Registration</Tab>
                        <Tab>Login</Tab>
                    </TabList>
                    <TabPanel><Registration /></TabPanel>
                    <TabPanel><Login /></TabPanel>
                </Tabs>
            </div>
        );
    }
}