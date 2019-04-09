/**
 * Sample React Native 1_App
 * https://github.com/facebook/react-native
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
import {Platform, StyleSheet, Text, View, TextInput, StatusBar} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};

/**
 *
 *
 * 状态栏
 */


/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构

            <StatusBar animated={{
                backgroundColor: "#111"
            }}
                       barStyle="dark-content"
                       hidden={false}
                       translucent={true}
                       networkActivityIndicatorVisible={false}
            ></StatusBar>

        );
    }

    getView() {
        /**
         * 通过虚拟dom找到元素
         */
        this.refs.viewOne
    }

}
