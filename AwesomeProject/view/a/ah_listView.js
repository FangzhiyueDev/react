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
    Image,
    TouchableOpacity,
    ScrollView,
    ListView
} from 'react-native'; //react-native都是组件

const instructions = Platform.select({
    ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
    android:
        'Double tap R on your keyboard to reload,\n' +
        'Shake or press menu button for dev menu',
});

type
    Props = {};


/**
 * es6的语法
 */
export default class App extends Component<Props> {


    getInitialState() {

        var ds = new ListView.DataSource({

            rowHasChanged: (r1, r2) => r1 != r2
        });

        var ds = new ListView.DataSource({

            rowHasChanged: function (r1, r2) {
                return r1 != r2
            }
        })

        this.state = {dataSource: ds.cloneWithRows(['row 1', 'row 2']),}
    }


    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <ListView
                dataSource={this.state.dataSource}

                /**
                * 第一种写法

                renderRow={(rowData) => <Text>{rowData}</Text>}
                 */

                /**
                *  第二种写法
                renderRow={(rowData) => {
                    return (
                        <Text>{rowData}</Text>
                    )
                }} 
                */

                renderRow={function () {
                    return (
                        <Text>{rowData}</Text>
                    )
                }}

            ></ListView>
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

    }
);


