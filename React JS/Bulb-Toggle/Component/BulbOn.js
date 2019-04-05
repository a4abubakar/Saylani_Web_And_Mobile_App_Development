import React, { Component } from 'react';
import lightOn from '../Images/aHR0cDovL3d3dy5saXZlc2NpZW5jZS5jb20vaW1hZ2VzL2kvMDAwLzAwMi83NTkvb3JpZ2luYWwvMDgxMjA5LWxpZ2h0LWJ1bGItMDIuanBn.webp';
import Img from './Image';
class BulbOn extends Component {
    render() {
        return (
            <Img imagePath={lightOn} hgt="350px"/>
        )
    }
}
export default BulbOn;