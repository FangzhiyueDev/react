/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {
    Platform, StyleSheet, Text, View, Button, Alert,
    SectionList,

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
            <SectionList
                renderItem={({item, index, section}) => <Text style={{width: '100%', color: "#111", fontSize: 18,}}
                                                              key={index}>{item}:---->{section.title}</Text>}
                // renderSectionHeader={({section: {title}}) => (
                //     <Text style={{fontWeight: "bold", width: width}}>{title}</Text>
                // )}

                // 这个函数接受的对象是一个对象
                //这个语法很难接受，目前猜测是react的语法
                renderSectionHeader={function ({section: {title}}) {
                    return (
                        <Text style={{fontWeight: "bold", width: '100%', color: "#111", fontSize: 20,}}>{title}</Text>
                    );
                }}

                sections={[
                    {title: "Title1", data: ["item1", "item2"]},
                    {title: "Title2", data: ["item3", "item4"]},
                ]}
                keyExtractor={(item, index) => item + index}
            />
        );
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




