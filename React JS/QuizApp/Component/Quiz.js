import React, { Component } from 'react';
import Result from "./result"
class CreateQuiz extends Component {
    constructor() {
        super()
        this.state = {
            currentQues: "",
            allQues: [],
            counter: 0,
            correct: 0
        }
        this.incrementCounter = this.incrementCounter.bind(this)
        this.handleInput = this.handleInput.bind(this)
    }

    componentDidMount() {
        fetch("https://opentdb.com/api.php?amount=10")
            .then(response => response.json())
            .then(response => {
                const { results } = response
                console.log(results)
                this.setState({
                    allQues: results
                })
            })

    }


    handleInput(e) {
        this.setState({
            correct: this.state.correct + 1
        })
        console.log(this.state.correct)
    }

    incrementCounter() {
        this.setState({
            counter: this.state.counter + 1
        })
    }

    sendResult() {
        this.props.finishQuiz()
    }

    render() {
        const { allQues, counter } = this.state
        console.log(allQues)
        return (

            allQues.length ?
                counter < allQues.length ?
                    <div>
                        <h4>Question # {counter}:  {allQues[counter].question}</h4>
                        <p>
                            {allQues[counter].incorrect_answers.map((index) => {
                                return <label>
                                    <input value={allQues[counter].incorrect_answers} name="group1" type="radio" />
                                    <span key={counter}>{index}</span>
                                </label>

                            })
                            }
                        </p>
                        <p>
                            <label>
                                <input onChange={this.handleInput} value={allQues[counter].correct_answer} name="group1" type="radio" />
                                <span key={counter}>{allQues[counter].correct_answer}</span>
                            </label>
                        </p>
                        <button onClick={this.incrementCounter} style={{ width: 300, marginTop: 30 }} className="waves-effect waves-light btn-small " type="submit">Next</button>}
            </div>
                    : <div>
                        <Result correctAnswers={this.state.correct} />
                    </div>
                :
                <h1>nhi aya Baba</h1>
        )

    }
}
export default CreateQuiz;