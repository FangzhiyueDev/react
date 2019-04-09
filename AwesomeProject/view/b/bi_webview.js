import React, {Component} from 'react';
import {WebView} from 'react-native';

class App extends Component {


    render() {
        return (
            <WebView
                source={{uri: 'https://github.com/facebook/react-native'}}
                style={{marginTop: 20}}
            />
        );
    }
}

/**
 * 使用这种方法也能对类进行导出
 * @type {App}
 */

module.exports = App