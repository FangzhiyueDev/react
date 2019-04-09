/**
 * 引入react组件  component组件
 */
import React, {Component} from 'react';
/**
 * 导入组件 这个是从react-native引入的
 */
import {Platform, StyleSheet, Text, View, Button, Alert, ScrollView, RefreshControl} from 'react-native'; //react-native都是组件


type Props = {};

export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            refreshing: false,
        };
    }

    _onRefresh = () => {
        this.setState({refreshing: true});
        fetch("http://www.baidu.com").then(() => {
            this.setState({refreshing: false});
        }).catch((e) => {
            this.setState({
                refreshing: false
            })
        });
    }

    render() {
        return (
            <ScrollView
                refreshControl={
                    <RefreshControl
                        refreshing={this.state.refreshing}
                        onRefresh={this._onRefresh}
                    />
                }
            />
        );
    }
}
