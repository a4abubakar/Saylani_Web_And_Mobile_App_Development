import React, { Component } from 'react';
import { selectCategory, selectForce } from '../config/api';
import './crime.css'

export default class Crimes extends Component {
    constructor() {
        super();
        this.state = {
            categories: [],
            forces: [],
            selectedCategory: "",
            selectedForce: "",
            result: []
        }
        this.handleCategory = this.handleCategory.bind(this);
        this.handleForce = this.handleForce.bind(this);
        this.searchCases = this.searchCases.bind(this)
    }
    componentDidMount() {
        this.fetchCategory();
        this.fetchForce();
        this.searchCases();
    }
    async fetchCategory() {
        try {
            const result = await selectCategory();
            console.log(result)
            this.setState({ categories: result })
        }
        catch (e) {

        }
    }
    async fetchForce() {
        try {
            const result = await selectForce();
            console.log(result)
            this.setState({ forces: result })
        }
        catch (e) {

        }
    }
    handleCategory(e) {
        this.setState({ selectedCategory: e.target.value });
    }
    handleForce(e) {
        this.setState({ selectedForce: e.target.value });
    }
    fetchCases() {
        const { selectedCategory, selectedForce } = this.state;
        // console.log(selectedCategory, selectedForce)
        return new Promise((resolve, reject) => {
            fetch(`https://data.police.uk/api/crimes-no-location?category=${selectedCategory}&force=${selectedForce}`)
                .then(res => res.json())
                .then(res => {
                    // console.log(res)
                    resolve(res.category)
                })
                .catch(e => {
                    reject({ message: "Something Went Wrong" })
                })
        })
    }
    async searchCases() {
        try {
            const result = await this.fetchCases();
            console.log(result)
            this.setState({ result: result })
        }
        catch (e) {

        }
    }
    render() {
        const { categories, forces, selectedCategory, selectedForce } = this.state;
        console.log(selectedCategory)
        console.log(selectedForce)
        return (
            <div>
                <div>
                    <div className="header">
                        <a href="#default" className="logo">Crime App</a>
                    </div>
                </div>
                <select onChange={this.handleCategory}>
                    <option disabled selected>Select Category</option>
                    {
                        categories.map((elem) => {
                            return <option>{elem.name}</option>
                        })
                    }
                </select>
                <select onChange={this.handleForce}>
                    <option disabled selected>Select Force</option>
                    {
                        forces.map((elem) => {
                            return <option>{elem.name}</option>
                        })
                    }
                </select>
                <button onClick={this.searchCases}>Search</button>
                <div>
                    <table id="myTable">
                        <tr className="header">
                            <th style={{ width: "20%" }}>Id</th>
                            <th style={{ width: "40%" }}>Category</th>
                            <th style={{ width: "40%" }}>Date</th>
                        </tr>
                        {
                            this.state.result.map((elem) => {
                                return <tr>
                                    <td>{elem.id}</td>
                                    <td>{elem.outcome_status.category}</td>
                                    <td>{elem.outcome_status.date}</td>
                                </tr>
                            })
                        }
                    </table>
                </div>
            </div>
        )
    }
}