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
import {Platform, StyleSheet, Text, View, TextInput, Image, Button} from 'react-native'; //react-native都是组件

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
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View style={styles.container}>
                {/*头像*/}
                <Image source={require('../../image/kefu.png')} style={styles.iconStyle}/>

                <TextInput placeholder={'请输入用户名'} style={styles.textInputStyle}/>
                <TextInput placeholder={'请输入密码'}
                           password={true}
                           style={styles.textInputStyle}
                />

                <Text style={styles.loginBtn}>登录</Text>

                <View style={styles.settingStyle}>
                    <Text style={styles.textColor}>无法登录</Text>
                    <Text style={styles.textColor}>新用户</Text>
                </View>

                <View style={styles.otherLogin}>
                    <Text>其他登录方式</Text>
                    <Image source={require('../../image/download.png')} style={styles.imgStyle}/>
                    <Image source={require('../../image/input.png')} style={styles.imgStyle}/>
                    <Image source={require('../../image/jiameng.png')} style={styles.imgStyle}/>
                </View>

        


                {/*我们特意的尝试了下react-native对界面大小的处理,发现当我们的界面大小呈现*/}
                {/*不下的时候,会溢出,系统并不会在自动添加滚动条*/}

                {/*<View style={{height: 2000, backgroundColor: '#ccc'}}>*/}
                {/*    <Text>SADASF</Text>*/}
                {/*</View>*/}

            

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#f3f3f3',
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 40,
        borderWidth: 5,
        borderColor: 'white',
        marginTop: 50,
        marginBottom: 30,
    },
    textInputStyle: {
        height: 45,
        backgroundColor: 'white',
        width: '100%',
        marginBottom: 1,
        //内容居中
        textAlign: 'center'
    },
    loginBtn: {
        height: 45,
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        backgroundColor: '#3a99ff',
        marginTop: 30,
        textAlign: 'center',
        lineHeight: 45,
        borderRadius: 5,
        fontSize: 17,
        color: '#fff',
    },
    settingStyle: {
        width: '90%',
        marginLeft: '5%',
        marginRight: '5%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 20,
    },
    textColor: {color: '#3a99ff'},
    otherLogin: {
        flexDirection: 'row',
        alignItems: 'center',
        position: 'absolute',
        bottom: 10,
        left: 10,
    },
    imgStyle: {
        height: 40,
        width: 40,
        borderRadius: 20,
        marginLeft: 8,
    },
});

