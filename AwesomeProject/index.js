//导入json数据
import {name as appName} from './app.json';

/**
 * 系统启动的主入口
 * 通过注册组建,实现了对界面的注册
 * 我们通过更改上面的导入,来动态的调整界面的显示
 */
import {
    AppRegistry,
} from 'react-native'


import App from "./view/project/app"


AppRegistry.registerComponent(appName, () => App);



