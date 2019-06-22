import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import Registration from './Registration/Restaurant'
import Login from './Login/Restaurant'
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
            <Tabs selectedIndex={this.state.tabIndex} onSelect={tabIndex => this.setState({ tabIndex })}>
                <TabList>
                    <Tab>Registration</Tab>
                    <Tab>Login</Tab>
                </TabList>
                <TabPanel><Registration /></TabPanel>
                <TabPanel><Login /></TabPanel>
            </Tabs>
        );
    }
}