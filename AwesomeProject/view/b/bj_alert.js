import React, {Component} from 'react';
import {WebView, Alert, Text} from 'react-native';

class App extends Component {


    render() {
        return (
            
            <Text onPress={demo} style={{marginTop: 25}}>点击</Text>

        );
    }
}

/**
 * 使用这种方法也能对类进行导出
 * @type {App}
 */

module.exports = App


function demo() {
    Alert.alert(
        'Alert Title',
        'My Alert Msg',
        [
            {text: 'Ask me later', onPress: () => console.log('Ask me later pressed')},
            {text: 'Cancel', onPress: () => console.log('Cancel Pressed'), style: 'cancel'},
            {text: 'OK', onPress: () => console.log('OK Pressed')},
        ],
        {cancelable: false}
    )
}



