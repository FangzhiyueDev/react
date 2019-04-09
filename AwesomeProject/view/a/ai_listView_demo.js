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
    Alert,

} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};


/**
 * 导入json数据
 * @type {*}
 */
var wine = require("../../json/wine.json")//数组


var width = require("Dimensions").get("window").width;


var App = React.createClass({


    getInitialState: function () {

        //设置数据源

        var ds = new ListView.DataSource({

            rowHasChanged: function (r1, r2) {
                return r1 != r2;
            }
        })

        //设置返回数据
        return {
            dataSource: ds.cloneWithRows(wine),
        }

    },
    //设置render函数
    render: function () {

        return (

            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
            >
            </ListView>
        )
    },

    renderRow(rowData, sectionID, rowID, highlightRow) {
        // console.log(sectionID, rowID)
        return (
            <TouchableOpacity actionOpacity={0.5} onPress={() => {
                Alert.alert("点击", "点击了第" + rowID + "行")
            }}>
                <View style={styles.cellViewStyle}>
                    <Image source={{uri: rowData.image}} style={styles.leftImageStyle}/>
                    <View style={styles.rightViewStyle}>
                        <Text style={styles.topTitleStyle}>{rowData.name}</Text>
                        <Text style={styles.bottomTitleStyle}>人民币{rowData.money}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
});


const styles = React.createClass({

    cellViewStyle: {

        backgroundColor: "white",
        borderBottomColor: "#e8e8e8",
        borderBottomWidth: 0.5,

        flexDirection: "row",
        padding: 10,
    },
    leftImageStyle: {
        width: 60,
        height: 60,
        marginRight: 10,
    },
    topTitleStyle: {
        color: "red",
        // width: width * 0.7
        width: "70%",
        marginBottom: 8,
    },
    bottomTitleStyle: {
        color: "blue"
    },
    rightViewStyle: {
        flexDirection: "column",
        justifyContent: "center"
    },

})
