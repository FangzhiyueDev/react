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
    Platform,
    StyleSheet,
    Text,
    View,
    TextInput,
    ScrollView,
} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type
    Props = {};


/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构

            <ScrollView horizontal={true} showsHorizontalIndicator={false}>
                {this.getElement()}
            </ScrollView>
        );
    }

    getElement() {

        var allChild = [];
        var colors = ['red', "green", 'blue', 'yellow', 'purple']

        for (var i = 0; i < colors.length; i++) {

            allChild.push(
                <View key={i} style={{backgroundColor: colors, width: 300, height: 200}}>
                    <Text>{i}</Text>
                </View>
            )
        }
        return allChild;
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

