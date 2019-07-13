import React, { Component } from 'react';
import { TextInput, StyleSheet, Text, Modal, View, Alert, TouchableOpacity, TouchableHighlight, Button, Image, FlatList, ScrollView } from 'react-native';

export default class Home extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        const { navigate } = this.props.navigation
        return (
            <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
                <Button title="Start Quiz" onPress={() => navigate("Quiz")} />
            </View>
        )
    }
}