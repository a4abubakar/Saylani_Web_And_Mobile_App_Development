import React, { Component } from 'react';
import { ListItem } from 'react-native-elements'
import { TextInput, StyleSheet, Text, Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';

export default class Quiz extends Component {
    constructor(props) {
        super(props)
        this.state = {
            quizApi: [],
            index: 0,
            answer: 0,
            correct_answer: ""
        }
        this.checkAnswer = this.checkAnswer.bind(this)
        this.next = this.next.bind(this)
    }
    componentDidMount() {
        const { quizApi, index, answer } = this.state
        fetch("https://opentdb.com/api.php?amount=10&category=18&difficulty=medium&type=multiple")
            .then(res => res.json())
            .then(result => { this.setState({ quizApi: result.results }) })
        // this.setState({ correct_answer: quizApi[index].correct_answer })
    }
    checkAnswer(l) {
        const { index, quizApi, answer, correct_answer } = this.state
        // const
        console.log(l, this.state.index)
        console.log(quizApi[index].correct_answer)
        console.log(this.state.answer)
        if (l === quizApi[index].correct_answer) {
            const newAnswer = answer + 10
            this.setState({ answer: newAnswer })
        }
        console.log(this.state.answer)
    }
    next() {
        const { index } = this.state
        const newIndex = index + 1
        this.setState({ index: newIndex })
    }
    render() {
        // if(this.state.quizApi.length){
        //     console.log(this.state.quizApi[0].question)
        // }
        console.log("hhh", this.state.index)
        const { quizApi, index, answer } = this.state
        return (
            this.state.index > 9 ?
                <View style={{ flex: 1,justifyContent: "center", alignItems: "center" }}>
                    <Text>Result</Text>
                    <Text>Score : {this.state.answer}</Text>
                    <Button title="Play Again" onPress={() => { this.setState({ index: 0, answer:0 }) }} />
                </View>
                : quizApi.length ? <View>
                    <Text>Question # {index + 1} : {quizApi[index].question}</Text>
                    <View>
                        {quizApi[index].incorrect_answers.map((l, i) => (
                            // <View key={i}><Button title={l} onPress={()=>{this.checkAnswer(l)}}/></View>
                            <ListItem
                                key={i}
                                title={l}
                                onPress={() => { this.checkAnswer(l) }}
                            />
                        ))}
                        <ListItem
                            title={quizApi[index].correct_answer}
                            onPress={() => { this.checkAnswer(quizApi[index].correct_answer) }}
                        />
                    </View>
                    <View>
                        <Button title="Next" onPress={() => { this.next() }} />
                    </View>
                </View> :
                    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                        <Text>Starting Quiz...</Text>
                    </View>
        )
    }
}