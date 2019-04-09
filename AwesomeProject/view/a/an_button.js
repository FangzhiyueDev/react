/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {Platform, StyleSheet, Text, View, Button, Alert} from 'react-native'; //react-native都是组件


type Props = {};


/**
 * 下面这两种方法都能实现 具体的原因请参考网上的资料
 */
let width = require("Dimensions").get('window').width

import Dimensions from "Dimensions";

let width = Dimensions.get("window").width;


/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View>
                <Button style={styles.buttonStyle}
                        onPress={this.onPressLearnMore}
                        title="Learn More"
                        color="#841584"
                        accessibilityLabel="Learn more about this purple button"
                />
            </View>
        );
    }


    onPressLearnMore() {

        Alert.alert("宽度=" + width)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

    buttonStyle: {}

});
