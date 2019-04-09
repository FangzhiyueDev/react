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

    StatusBar, NavigatorIOS,
    ToolbarAndroid, Image,
    ScrollView, ListView, TouchableOpacity, AlertIOS, Alert
    , CheckBox

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
            <View>

                /**
                * 状态栏,系统最上边的显示网络的栏
                 */
                <StatusBar
                    backgroundColor="blue"
                    barStyle="light-content"
                />

                <ToolbarAndroid style={{backgroundColor: "#ccc", height: 40, width: '100%'}}
                                logo={require('../../image/kefu.png')}
                                title="AwesomeApp"
                                actions={[{title: 'Settings', icon: require('./icon_settings.png'), show: 'always'}]}
                                onActionSelected={this.onActionSelected}/>


            </View>
        );
    }

    onActionSelected(position) {
        if (position === 0) { // index of 'Settings'
            // showSettings();
        }
    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});
