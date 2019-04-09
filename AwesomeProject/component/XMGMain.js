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
import {
    Platform, StyleSheet, Text, View, TextInput,
    NavigatorIOS,
} from 'react-native'; //react-native都是组件


import TabBar from 'react-native-xtabbar';
import TabBarItem from "react-native-xtabbar/TabBarItem";

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type
    Props = {};


/**
 * 高版本已经不再支持es5的写法了
 */
export default class Main extends Component<Props> {


    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构

        );
    }
};


const styles = StyleSheet.create({});


/**
 * 导出,使之组件化
 * 这是es5的写法
 */
// module.exports = Main