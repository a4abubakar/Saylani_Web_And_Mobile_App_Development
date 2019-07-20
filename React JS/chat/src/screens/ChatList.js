import React, {Component} from 'react'
import getAllUsers from '../config/firebase'

export default class ChatList extends Component{
    componentDidMount(){
        this.getUsers()
    }
    async getUsers(){
        const users = await getAllUsers()
    }
    render(){
        return(
            <div>

            </div>
        )
    }
}