import React, {Component} from 'react'
import {
    AppRegistry,
    StyleSheet,
    TouchableHighlight,
    Text,
    View,
    TouchableNativeFeedback, ViewPagerAndroid,
    Button
} from 'react-native'


/**
 * viewPagerAndroid这个组件可以用来构建基本的页面组成元素
 * 通过 #{scrollEnabled} 设置不可以滚动
 *
 *
 *
 *
 */
export default class App extends Component {
    constructor(props) {
        super(props)
        this.state = {index: 0}
    }


    render() {
        return (
            <View style={styles.container}>
                <ViewPagerAndroid ref="viewPager"
                                  style={styles.viewPager}
                                  initialPage={0}>
                    <View style={styles.pageStyle} key="1">
                        <Text>First page</Text>
                    </View>
                    <View style={styles.pageStyle} key="2">
                        <Text>Second page</Text>
                    </View>
                </ViewPagerAndroid>

                <Button title={"点击"} onPress={() => {

                    this.refs.viewPager.setPage(1)

                }}/>


            </View>
        );
    }

    onPressButton() {

    }

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        paddingHorizontal: 10
    },
    viewPager: {
        flex: 1
    },
    pageStyle: {
        alignItems: 'center',
        padding: 20,
    }
})

AppRegistry.registerComponent('App', () => App)
