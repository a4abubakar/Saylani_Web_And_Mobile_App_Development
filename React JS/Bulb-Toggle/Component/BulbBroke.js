import React, { Component } from 'react';
import lightShut from '../Images/istockphoto-164446736-1024x1024.jpg';
import Img from './Image';

class BulbBroke extends Component{
    render(){
        return(
            <Img imagePath={lightShut} hgt="350px"/>
        )
    }
}
export default BulbBroke;