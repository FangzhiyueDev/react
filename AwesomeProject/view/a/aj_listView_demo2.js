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
    ListView,
    Image,
    TouchableOpacity,
    AlertIOS
} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};


//一些常量
var width = require("Dimensions").get("window").width;

var col = 3;


/**
 *
 * 九宫格的实现原理
 * ES5
 *
 */


var data = require("../../json/sharedData.json");

const App = React.createClass({

    getDefaultProps() {

        return {}
    },
    getInitialState() {

        const ds = new ListView.DataSource((r1, r2) => r1 !== r2);
        return {
            dataSource: ds.cloneWithRows(data.data),
        }
    },
    render() {

        return (
            <ListView
                contentContainerStyle={styles.listViewStyle}
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            ></ListView>
        )
    },

    renderRow(rowData, sectionID, rowId) {
        return (
            <TouchableOpacity actionOpacity={0.5}>
                <View style={styles.innerStyle} onPress={() => {
                    AlertIOS.alert("点击了")
                }}>
                    <Image source={{uri: rowData.icon}} style={styles.iconStyle}/>
                    <Text>{rowData.title}</Text>
                </View>
            </TouchableOpacity>
        );
    }


})


const styles = StyleSheet.create({
        container: {
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#F5FCFF',
        },
        iconStyle: {
            width: 80,
            height: 80,

        }, listViewStyle: {
            flexDirection: "row",
            //多行显示
            flexWrap: "wrap"
        },
        innerStyle: {

            width: width / 3,
            textAlign: "center",
            alignItems: "center"

        }
    })
;

