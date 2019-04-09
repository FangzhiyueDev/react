import TabBar from 'react-native-xtabbar';


import FadeInView from './bk_animated';

import React from 'react';
import {Animated, Text, View, TouchableOpacity, StyleSheet, Image} from 'react-native';


import TabNavigator from 'react-native-tab-navigator';


export default class App extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "home",
            badge: ' ',
        };
    }


    render() {
        return (
            <View style={styles.container}>
                <TabNavigator style={{height: 40, width: "100%", backgroundColor: "red"}}>
                    <TabNavigator.Item selected={this.state.selectedTab === 'home'} title="Home"
                                       renderIcon={() => <Image source={require("../../image/input.png")}/>}
                                       badgeText="1"
                                       onPress={() => this.setState({selectedTab: 'home'})}>home </TabNavigator.Item>
                    <TabNavigator.Item selected={this.state.selectedTab === 'profile'} title="Profile"
                                       renderIcon={() => <Image source={require("../../image/download.png")}/>}
                                       renderBadge={() => <Text>地啊你</Text>}
                                       onPress={() => this.setState({selectedTab: 'profile'})}> proView</TabNavigator.Item>
                </TabNavigator>

                <Text style={{fontSize: 30, backgroundColor: "red"}}>点案发前个杯全国发起微博</Text>

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
    },
    text: {},
    content: {
        height: 40,
        width: "100%",
        backgroundColor: "red"
    }

});
