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
    Platform, StyleSheet, Text, View, TextInput, TouchableOpacity

    , AlertIOS
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

    getInitialState() {
        return {
            title: '不透明触摸'
        }
    }


    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View style={styles.container}>
                <View onPress={this.renderPress()}>
                    <TouchableOpacity activeOpacity={0.5}>
                        <Text>可以点击</Text>
                    </TouchableOpacity>
                </View>
                <View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.renderPress()
                    }}>
                        <Text>可以点击</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity
                        activeOpacity={0.5}
                        onPress={() => {
                            AlertIOS.alert("点击了", "你点我干嘛")
                        }}
                        onPressIn={() => {
                            AlertIOS.alert("按下了", "你按我干嘛")
                        }}
                        onPressOut={() => {
                            AlertIOS.alert("抬起了", "抬起了")
                        }}

                        onLongPress={() => {
                            AlertIOS.alert("长按了", "长按了")
                        }}
                    >
                        <Text>可以点击</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <TouchableOpacity activeOpacity={0.5} onPress={() => {
                        this.activeEvent();
                    }}>
                        <Text>可以点击</Text>
                    </TouchableOpacity>
                </View>

                <View>
                    <Text>{this.getInitialState().title}</Text>

                </View>


            </View>
        );
    }


    //当按下鼠标时

    renderPress() {
        console.log("按下");
    }

    activeEvent() {
        this.getInitialState().title = "单方"


    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,//这个属性是用在子类中的,代表的是 在
        //父布局占据的权重
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },

});

