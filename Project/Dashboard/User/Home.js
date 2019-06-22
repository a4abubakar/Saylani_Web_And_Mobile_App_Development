import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Restaurants from './Restaurants'
import MyRequests from './MyRequests'
import "react-tabs/style/react-tabs.css";

export default class Home extends Component {
    constructor() {
        super();
        this.state = {
            tabIndex: 0,    //State use for changing tabs
        };
    }
    render() {
        const token = localStorage.getItem("token")
        if (token === null) {
            return( <Redirect to="/" />)
        }
        return (
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Restaurants</Tab>
                    <Tab>My Requests</Tab>
                </TabList>
                <TabPanel style={{ textAlign: "center" }}><Restaurants /></TabPanel>
                <TabPanel style={{ textAlign: "center" }}><MyRequests /></TabPanel>
            </Tabs>
        );
    }
}