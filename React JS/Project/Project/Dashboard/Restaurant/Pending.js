import React, { Component } from 'react';
import '../../assets/css/style.css'
import fire from '../../config/firebase';

export default class Pending extends Component {
    constructor() {
        super()
        this.state = {
            data: []
        }
        this.progress = this.progress.bind(this)
    }
    componentDidMount() {
        let uid = localStorage.getItem("uid")
        fire.database().ref(`restaurants/${uid}/orders/`).once("value", snap => {
            let data = snap.val()
            let newData;
            let arr = this.state.data
            for (let key in data) {
                for (let key2 in data[key]) {
                    if (data[key][key2].status === "Pending") {
                        let a = data[key][key2].status
                        let resUid = data[key][key2].restaurant
                        fire.database().ref("restaurants/" + resUid).once("value", snaps => {
                            let data = snaps.val()
                            console.log(data)
                            arr.push({
                                uid: data.uid,
                                category: data.category,
                                city: data.city,
                                country: data.country,
                                email: data.email,
                                fullName: data.fullName,
                                status: a,
                                image: data.image,
                                lat: data.lat,
                                lng: data.lng
                            })
                        })
                    }
                }
            }
        })
    }
    progress(){
        
    }
    render() {
        const force = this.state.data.map((elem) => {
            return <div className="allAds" id="allAds">
                {/* <li>{elem.category}</li> */}
                <div className="card" style={{ width: "25rem", borderRadius: "15px" }} >
                    <img className="card-img-top" src={elem.image} />
                    <div className="card-body">
                        <h3 className="card-title" id="card-title">{elem.fullName}</h3>
                        <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Category: {elem.category}</h4>
                        <h4 className="card-text" id="card-text"><span className="glyphicon glyphicon-map-marker"></span>Status: {elem.status}</h4>
                        {/* <h3 className="card-text" id="card-price"></h3> */}
                        <button className="btn btn-danger" data-toggle="modal" data-target="#product_view" onClick={this.progress}>In Progress</button>
                    </div>
                </div>
            </div>
        })
        return (
            <div>
                {force}
            </div>
        )
    }
}