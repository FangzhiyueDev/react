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
    ScrollView,
    TextInput,
    Image,
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
 * 对于我们引入文件就能够当做在组建使用
 *
 *你可以理解为,react-native中是所有的文件是组件
 *
 *
 *
 */

//引入计时器
var TimerMixin = require('react-timer-mixin');
//引入json数据
var ImageData = require("../view/df.json");

var width = require("Dimensions").get('window').width

var FsCrollViewDemo = React.createClass({

    mixins: [TimerMixin],

    getDefaultProps: function () {

        return {
            //每隔多少时间
            duration: 1000,
        }
    },
    getInitialState() {

        return {
            //当前的页码
            currentPage: 0,

        }
    },


    startTimer: function () {
        //1,拿到scrollView
        var sccrollView = this.refs.scrollView;

        //2.添加定时器
        this.timer = this.setInterval(function () {

            console.log("亚麻跌~~~~~~~~");

            //2.1 设置圆点
            var activityPage = 0;
            var imageCount = ImageData.data.length;

            //2.2判断
            if (this.state.currentPage + 1 >= imageCount) {
                activityPage = 0;
            } else {
                activityPage = this.state.currentPage + 1;
            }

            //2.3更新状态机
            this.setState({
                currentPage: activityPage,
            })


            //2.4 图片的滚动
            var offsetX = activityPage * width;
            sccrollView.scrollResponderScrollTo({x: offsetX, y: 0, animated: true});

        }, this.props.duration)


    },
    //实现复杂的操作
    componentDidMount: function () {
        //开启定时器
        this.startTimer();

    },

    renderAllImage: function () {
        //数组
        var allImage = [];
        //拿到图像数组
        var imageArr = ImageData.data;
        //遍历
        for (var i = 0; i < imageArr.length; i++) {
            var imageItem = imageArr[i];
            //创建组件装入我们的数组
            allImage.push(
                <Image key={i} source={{uri: imageItem.img}} style={{width: width, height: 120,}}/>
            )
        }
        return allImage;
    },

    //返回所有图片的原点
    renderPageCircle: function () {
        var indictorArr = ImageData.data;

        var style;

        for (var i = 0; i < indictorArr.length; i++) {

            /**
             * 这个是csss对象
             */
            style = (i == this.state.currentPage) ? {color: 'orange'} : {color: '#fff'}

            //把原点装入数组
            indictorArr.push(
                //原点
                <Text key={i} style={[{fontSize: 25, color: 'white'}, style]}>&bull;</Text>
            )
        }
        return indictorArr;
    },

    onAnimationEnd: function (event) {

        //1.求出水平滚动的偏移量
        var offsetX = e.nativeEvent.contentOffset.x;

        //2.求出当前的页数

        var currentPage = parseInt(offsetX / width);

        console.log("当前的页数" + currentPage);

        //更新状态机 ,重新渲染
        this.setState({
            currentPage: currentPage,
        });

    },
    onScrollBeginDrag: function () {

        //
        clearInterval(this.timer)

    },
    onScrollEndDrag: function () {

        this.startTimer()

    },
    render() {
        return (
            <View style={styles.container}>
                <ScrollView ref='scrollView'
                    //页面切换结束的时候调用
                            onMomentumScrollEnd={
                                this.onAnimationEnd(event)
                            }
                            onScrollBeginDrag={this.onScrollBeginDrag()}
                            onScrollEndDrag={this.onScrollEndDrag()}
                            horizontal={true}>
                    {/*隐藏滚动条*/}
                    showsHorizontalScrollIndicator={false}
                    {/*//自动分页*/}
                    pagingEnabled={true}
                    {this.renderAllImage()}
                </ScrollView>
                <View style={styles.pageViewStyle}>
                    {/*返回5个原点*/}
                    {this.renderPageCircle()}
                </View>
            </View>
        )
    },


});


const styles = StyleSheet.create({

    container: {
        marginTop: 20,
    },
    pageViewStyle: {
        width: width,
        height: 25,
        backgroundColor: 'rgba(0,0,0,0.2)',
        position: 'absolute',
        bottomL: 0,

        flexDirection: 'row',
        alignItems: 'center'
    }


})



