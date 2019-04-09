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
    Platform, StyleSheet, Text, View,
    TextInput,
    Navigator,
    NavigatorIOS,
    TouchableOpacity
} from 'react-native'; //react-native都是组件


import TabBar from 'react-native-xtabbar';


type
    Props = {};


/**
 * es6的语法
 */
export default class App extends Component<Props> {
    render() {//渲染---->返回具体的组件内容
        return (//编写页面结构
            <View style={styles.container}>
                <TabBar
                    defaultPage={3}
                    style={styles.content}
                    onItemSelected={(index) => {
                        console.log('current itemindex is ${index}');
                    }}>
                    <TabBar.Item
                        icon={require('./img/home_normal.png')}
                        selectedIcon={require('./img/home_selected.png')}
                        onPress={() => {
                            this.setState({badge: ' ',});
                        }}
                        title='首页'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Home</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./img/rank_normal.png')}
                        selectedIcon={require('./img/rank_selected.png')}
                        onPress={() => {
                            this.setState({badge: 5,});
                        }}
                        title='排行'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Rank</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./img/message_normal.png')}
                        selectedIcon={require('./img/message_selected.png')}
                        badge={this.state.badge}
                        onPress={() => {
                            this.setState({badge: '',});
                        }}
                        title='消息'>
                        <View style={styles.text}>
                            <Text style={{fontSize: 18}}>Message</Text>
                        </View>
                    </TabBar.Item>

                    <TabBar.Item
                        icon={require('./img/profile_normal.png')}
                        selectedIcon={require('./img/profile_selected.png')}
                        title='我'>
                        <View style={styles.text}>
                                <Text style={{fontSize: 18}}>Me</Text>
                        </View>
                    </TabBar.Item>
                </TabBar>
            </View>
        );
    }


    changeStyle() {
        var containerView = this.refs.container;
        containerView.setAttributeNode({
            style: {}
        })

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
});


