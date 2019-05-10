import React, { Component } from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './Component/Application.css'
import Forces from './Component/Forces';
import CrimeCategories from './Component/Crime Categories';

export default class Application extends Component {
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
                    <Tab>Dashboard</Tab>
                    <Tab>Forces</Tab>
                    <Tab>Crime Categories</Tab>
                </TabList>
                <TabPanel style={{ textAlign: "center" }}>Empty... No Data Found</TabPanel>
                <TabPanel style={{ textAlign: "center" }}><Forces /></TabPanel>
                <TabPanel style={{ textAlign: "center" }}><CrimeCategories /></TabPanel>
            </Tabs>
        );
    }
}