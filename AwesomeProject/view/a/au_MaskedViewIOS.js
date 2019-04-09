import React from 'react';
import {MaskedViewIOS, Text, View} from 'react-native';


type Props = {};


/**
 *
 *
 * 这个类作为一个组件，需要我们进行导出，
 * 不然运行会发生下面的错误
 *
 * Invariant Violation: Element type is invalid: expected a string (for built-in components) or a class
 *
 */
export default class App extends React.Component<Props> {
    render() {
        return (
            // 决定蒙版的形状
            <MaskedViewIOS
                style={{flex: 1, flexDirection: 'row', height: '100%'}}
                maskElement={
                    <View style={{
                        // 蒙版的效果与其本身透明度相反。先设置整个背景透明，表示完全盖住蒙版底下的元素，不显示出来。
                        backgroundColor: 'transparent',
                        flex: 1,
                        justifyContent: 'center',
                        alignItems: 'center',
                    }}>
                        <Text style={{
                            fontSize: 60,
                            // 文字不透明，表示文字部分盖住的元素会显示出来。
                            color: 'black',
                            fontWeight: 'bold',
                        }}>
                            Basic Mask
                        </Text>
                    </View>
                }
            >
                { /* 被盖在蒙版之下的元素。可以放置任意元素，例如图片等。 */}
                <View style={{flex: 1, height: '100%', backgroundColor: '#324376'}}/>
                <View style={{flex: 1, height: '100%', backgroundColor: '#F5DD90'}}/>
                <View style={{flex: 1, height: '100%', backgroundColor: '#F76C5E'}}/>
            </MaskedViewIOS>
        );
    }
}