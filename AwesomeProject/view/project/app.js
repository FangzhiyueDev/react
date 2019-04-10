import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
} from 'react-native';
import {StackNavigator} from 'react-navigation';
import ProfileScreen from './ProfileScreen'
import ListScreen from './ListScreen'

class FirstScreen extends React.Component {
    static navigationOptions = {
        title: 'Welcome',
    };

    render() {
        const {navigate} = this.props.navigation;
        return (
            <View style={styles.container}>
                <Text style={styles.headerText}>Hello, Chat App!</Text>
                <Button
                    onPress={() => navigate('Listfile')}
                    title="Chat with Lucy"
                    navigation={navigate}
                />
            </View>
        );
    }
}


const App = StackNavigator({
    Home: {screen: FirstScreen},
    Profile: {screen: ProfileScreen},
    Listfile: {screen: ListScreen},
});

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    headerText: {
        width: '70%',
        height: '70%',
        textAlign: 'center',
        lineHeight: 300,
    },
});

export default App;
