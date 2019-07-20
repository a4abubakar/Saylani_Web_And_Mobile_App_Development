import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Login from '..screens/Login'
import Register from '../screens/Register'
import Chat from '../screens/Chat'
import ChatList from '../screens/ChatList'

class Navigation extends Component{
    render(){
        return(
            <div>
                <Route exact path="/" component={Login}/>
                <Route path="/register" component={Register}/>
                <Route path="/chat" component={Chat}/>
                <Route path="/chatlist" component={ChatList}/>
            </div>
        )
    }
}