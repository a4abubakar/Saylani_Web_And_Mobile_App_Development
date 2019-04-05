import React, { Component } from 'react';

class Img extends Component {
    render() {
        return (
            <img src={this.props.imagePath} height={this.props.hgt} />
        )
    }
}
export default Img;