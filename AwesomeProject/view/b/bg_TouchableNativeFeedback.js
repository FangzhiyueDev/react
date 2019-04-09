import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    TouchableNativeFeedback
} from 'react-native'

export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {count: 0}
    }

    onPress = () => {
        this.setState({
            count: this.state.count + 1
        })
    }

    render() {
        return (
            <TouchableNativeFeedback
                onPress={this.onPressButton}
                background={TouchableNativeFeedback.SelectableBackground()}>
                <View style={{
                    width: 60,
                    height: 35,
                    backgroundColor: 'red',
                    marginTop: 25,
                    justifyContent: "center",
                    alignItems: "center"
                }}>
                    <Text>Button</Text>
                </View>
            </TouchableNativeFeedback>
        );
    }

    onPressButton() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    button: {
        alignItems: 'center',
        backgroundColor: '#DDDDDD',
        padding: 10
    },
    countContainer: {
        alignItems: 'center',
        padding: 10
    },
    countText: {
        color: '#FF00FF'
    }
})

AppRegistry.registerComponent('App', () => App)
