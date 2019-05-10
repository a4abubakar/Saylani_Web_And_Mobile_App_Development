import React, { Component } from 'react';
export default class CrimeCategories extends Component {
    constructor() {
        super()
        this.state = {
            list: [],   //for fetched data
            text: "",   //for input value
            result: []  //for filtered data
        }
        this.search = this.search.bind(this); //binding search function that will filter the data
    }
    componentDidMount() {   //life cycle method
        fetch("https://data.police.uk/api/crime-categories") //fetching data from API
            .then(response => response.json())  //converting into json
            .then(list => this.setState({ list: list }))    //adding the fetched data into list that lies in state
            .catch(error => error)  //if any error appears!!
    }
    search(e) { //function that will filter data
        const { list } = this.state;    //destructuring list from state
        const text = e.target.value;    //storing the value of input into text
        const result = list.filter((elem) => {  //filtering the data
            return elem.name.slice(0, text.length).toLowerCase().indexOf(text.toLowerCase()) !== -1 //if any alphabet from starting is same as the text value then that data will be return
        })
        this.setState({ result, text }) //setting filtered which is result into the state and also the input text
    }
    render() {
        const { list, text, result } = this.state;
        const forces = text.length ? result.map((elem) => {
            return <li key={elem.url} style={{listStyleType:"none"}}>{elem.name}</li>
        })
            :
            list.map((elem) => {
                return <li key={elem.url} style={{listStyleType:"none"}}>{elem.name}</li>
            })
        return (
            <div>
                <input placeholder="Search Here" onChange={this.search} />{forces}
            </div>
        )
    }
}