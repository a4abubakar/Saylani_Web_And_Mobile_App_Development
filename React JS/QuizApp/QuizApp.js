import React, { Component } from 'react';
import './App.css';
import CreateQuiz from './Component/createQuiz';

class QuizApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: true,
            isBegin: false
        }
        this.startQuiz = this.startQuiz.bind(this);
    }
    static getDerivedStateFromProps() {
        return {
            isUser: true
        }
    }
    endQuiz(correct) {
        this.setState({
            isFinished: true,
            isBegin: false,
            result: correct
        })
    }
    startQuiz() {
        this.setState({
            isBegin: true
        })
    }
    // componentDidMount() {
    //     fetch("https://opentdb.com/api.php?amount=10")
    //         .then(response => response.json())
    //         .then(data => this.setState({ data: data.results }))
    // }
    render() {
        const { isBegin, isFinished, result } = this.state;
        return (
            <div className="App">
                Quiz App <br /><br/>
                {
                    !isBegin && <button onClick={this.startQuiz}>Start Quiz</button>
                }
                {
                    isBegin && <CreateQuiz />
                }
            </div>
        )
    }
}
export default QuizApp;