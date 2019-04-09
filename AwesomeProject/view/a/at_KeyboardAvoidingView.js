/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {
    Platform, StyleSheet, Text, View, Button, Alert, ImageBackground, KeyboardAvoidingView
    , Image, TextInput
} from 'react-native'; //react-native都是组件


type Props = {};


/**
 * 下面这两种方法都能实现 具体的原因请参考网上的资料
 */
let width = require("Dimensions").get('window').width

import Dimensions from "Dimensions";

width = Dimensions.get("window").width;


/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View>

                <KeyboardAvoidingView style={styles.container} behavior="padding" enabled>
                    <Text>处理</Text>
                    <Image source={require("../../image/kefu.png")}></Image>

                </KeyboardAvoidingView>

                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>



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
    textInputStyle: {
        height: 40,
        width: '100%',
        borderWidth: 1,
        marginTop: 40,
        borderColor: "#ccc",
    }

});
