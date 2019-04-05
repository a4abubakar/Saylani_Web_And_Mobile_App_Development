import React, { Component } from 'react';
import './bulb.css';
import bulbOff from './Images/incandescent-e1456179151174.jpg';
import BulbOn from './Component/BulbOn';
import Button from './Component/Button';
import BulbBroke from './Component/BulbBroke';
import Img from './Component/Image';

class BulbMain extends Component {
    constructor() {
        super();
        this.state = {
            toggle: 'off'
        }
    }
    render() {
        const { toggle } = this.state;
        return (
            <div className="App-header" >
                <div>
                    {toggle === 'off' && <Img imagePath={bulbOff} hgt="350px"/>}
                    {toggle === 'on' && <BulbOn />}
                    {toggle === 'broke' && <BulbBroke />}
                </div>
                <div>
                    {toggle !== 'on' && <Button text="On" clickAction={() => { this.setState({ toggle: 'on' }) }} />}
                    {toggle !== 'off' && <Button text="Off" clickAction={() => { this.setState({ toggle: 'off' }) }} />}
                    {toggle !== 'broke' && <Button text="Broke" clickAction={() => { this.setState({ toggle: 'broke' }) }} />}
                </div>
            </div>
        )
    }
}
export default BulbMain;