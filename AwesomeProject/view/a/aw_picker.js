/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {
    Platform, StyleSheet, Text, View, Button, Alert, Picker,
    PickerIOS
} from 'react-native'; //react-native都是组件


type Props = {};


/**
 * es6的语法
 */
export default class App extends Component<Props> {


    constructor(pros) {
        super(pros)
        this.state = {language: "java"}
        this.pros = {
            language: "java"
        }
    }


    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View>
                <Picker
                    selectedValue={this.state.language}
                    style={{height: 50, width: 100}}
                    onValueChange={(itemValue, itemIndex) => this.setState({
                        language: itemValue
                    })}>
                    <Picker.Item label="Java" value="java"/>
                    <Picker.Item label="JavaScript" value="js"/>
                </Picker>
                {/*出错，有时间再去处理*/}
                {/*<PickerIOS selectedValue={this.state.language}*/}
                {/*           style={{height: 50, width: 100}}*/}
                {/*           onValueChange={(itemValue, itemIndex) => this.setState({*/}
                {/*               language: itemValue*/}
                {/*           })}*/}
                {/*>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*    <PickerIOS.PickerIOSItem label="java" value="java"/>*/}
                {/*</PickerIOS>*/}
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
