/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {
    Platform, StyleSheet, Text, View, Button, Alert,
    SectionList, SegmentedControlIOS, Slider

} from 'react-native'; //react-native都是组件


type Props = {};


/**
 * 这个控件在不久会被移除，
 * 推荐使用的是
 * react-native-community/Slider
 */


/**
 * es6的语法
 */
export default class App extends Component<Props> {


    constructor(pros) {
        super(pros)

        /**
         * 初始化的话只能通过这种方式
         * @type {{selectedIndex: number}}
         */
        this.state = {
            selectedIndex: 0
        }
    }


    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <Slider
                maximumValue={100}
                minimumTrackTintColor="#ccc"
            />
        )
            ;
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




