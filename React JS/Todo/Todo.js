import React, { Component } from 'react';
// import 'bootstrap/dist/css/bootstrap.css';
import './App.css';


class Todo extends Component {
    state = {
        text: "",
        list: [],
        filterList: []
    }
    add() {
        const { text, list } = this.state;
        list.push(text);
        this.setState({ list, text: "" })
    }

    edit(index, value) {
        console.log(index);
        const { list } = this.state;
        let listItem = prompt("Enter new value", value);
        if (listItem != "") {
            list.map((v, i) => {
                if (i === index) {
                    this.setState(list.splice(index, 1, listItem))
                }
            })
        }
    }

    delete(index) {
        console.log(index);
        const { list } = this.state;
        list.map((v, i) => {
            if (i === index) {
                this.setState(list.splice(index, 1));
            }
        })
    }

    deleteAll() {
        this.setState({
            list: []
        })
    }

    search(e) {
        // console.log(e.target.value)
        const list = this.state.list;
        const text = e.target.value;
        const filterList = list.filter((item) => {
            return item.indexOf(text) !== -1
        })
        // console.log(arr)
        this.setState({ filterList })
    }

    render() {
        const { list, filterList } = this.state;
        const item = filterList.length ? filterList : list;
        return (
            <div>
                <h1>Todo List</h1>
                <input placeholder="Enter List items" onChange={(e) => { this.setState({ text: e.target.value }) }} value={this.state.text} />
                <button onClick={() => this.add()}>Add</button>&nbsp;
                <button onClick={() => this.deleteAll()}>Delete All</button><br />
                <input onChange={this.search.bind(this)} />
                <button>Search</button>
                <ol>
                    {
                        item.map((v, i) => {
                            return <li key={i}>
                                {v}<br />
                                <button onClick={this.edit.bind(this, i, v)}>Edit</button>
                                <button onClick={this.delete.bind(this, i)}>Delete</button>
                            </li>
                        })
                    }
                </ol>
            </div>
        )
    }
}
export default Todo;