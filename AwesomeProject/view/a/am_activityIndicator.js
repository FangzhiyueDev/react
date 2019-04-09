import React, {Component} from 'react'
import {
    ActivityIndicator,
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native'

export default class App extends Component {
    render() {
        return (
            <View>
                <ActivityIndicator size="large" color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
                <ActivityIndicator size="large" color="#0000ff"/>
                <ActivityIndicator size="small" color="#00ff00"/>
            </View>
        )
    }
}

const styles = StyleSheet.create({

    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    }
})

