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
    Platform, StyleSheet, Text, View, TextInput, TouchableOpacity,
    Image, ListView
} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type Props = {};
/**
 *
 * 实现吸顶效果
 *  也就是像城市列表里面存在英文索引,通过可以吸顶到listview的顶部
 *
 *
 */

var Car = require("../../json/car.json")


var App = React.createClass({

    getInitialState() {

        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID]
        }

        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ":" + rowID]//没见过的写法
        }


        return {

            dataSource: new ListView.DataSource({

                getSectionData: getSectionData,//获取组中的数据
                getRowData: getRowData,
                rowHasChanged: (r1, r2) => r1 !== r2,
                sectionHeaderHasChanged: (s1, s2) => s1 !== s2,
            })

        }
    },

    loadDataFromJson: function () {

        //拿到json数据
        var jsonData = Car.data;

        //定义相关变量
        var dataBlob = {}, sectionIDs = [], rowIDs = [], cars = [];

        //遍历
        for (var i = 0; i < jsonData.length; i++) {
            //把组号放到sectionID数组中
            sectionIDs.push(i);
            //把组中的内容放入到dataBlob中
            dataBlob[i] = jsonData[i].title;
            //取出该组中的所有数据
            cars = jsonData[i].cars;
            rowIDs[i] = [];
            //遍历所有车的数组
            for (let j = 0; j < cars.length; j++) {
                rowIDs[i].push(j);
                dataBlob[i + ":" + j] = cars[j];
            }
        }

        this.setState({
            dataSource: this.state.dataSource.cloneWithRowsAndSections(dataBlob.sectionID, rowIDs),
        });
    },
    /**
     * 复杂的操作,数据请求, 或者异步操作
     */
    componentDidMount() {
        //调用json数据
        this.loadDataFromJson();

    },


    render() {

        return (
            <ListView
                dataSource={this.state.dataSource}
                renderRow={this.renderRow}
                renderSectionHeader={this.renderSectionHeader}

            />
        )


    },

    renderRow(rowData) {
        return (
            <TouchableOpacity activeOpacity={0.5}>

                <View style={styles.rowStyle}>
                    <Image source={{uri: rowData.icon}} style={styles.rowImageStyle}/>
                    <Text style={{marginLeft: 5}}>{rowData.name}</Text>
                </View>

            </TouchableOpacity>
        )
    },
    renderSectionHeader(sectionData, sectionID) {
        return (
            <View style={styles.headerStyle}>
                <Text style={{marginLeft: 5, color: "red"}}>{sectionData}</Text>
            </View>
        )
    }


});


const styles = StyleSheet.create({});


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    rowImageStyle: {
        width: 70,
        height: 70,
    },
    rowStyle: {

        flexDirection: "row",
        alignItems: "center",
        padding: 10,
        borderBottomWidth: 0.5,
        borderBottomColor: "#e8e8e8",
    }, headerStyle: {

        backgroundColor: "#e8e8e8",
        height: 25,
        justifyContent: "center"
    }

});

