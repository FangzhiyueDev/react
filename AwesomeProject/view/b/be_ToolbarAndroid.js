/**
 * Sample React Native 1_App
 * https://github.com/facebook/react-native
 *
 *
 * @function 这个js的主要学习view的使用
 *
 * @format
 * @flow
 */

/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {
    Platform, StyleSheet, Text, TextInput, View, Switch,
    ToolbarAndroid
} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {
        return (
            <ToolbarAndroid style={{height: 65, width: '100%', marginTop: 25,}}
                            logo={require('../../image/download.png')}
                            title="AwesomeApp"
                            actions={[{title: 'Settings', icon: require('../../image/input.png'), show: 'always'},
                                {title: "云存储", icon: require("../../image/jiameng.png"), show: "always"}
                            ]}
                            onActionSelected={this.onActionSelected}/>
        )
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            // showSettings();
        }
    }
}
