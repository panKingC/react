/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    Button
} from 'react-native';


// type Props = {};
// export default class App extends Component<Props> {
export default class HomePage extends Component {
    static navigationOptions = {
        title:"Home"
    }

    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Welcome to HomePage
                </Text>
                <Button
                    title="go to Page01"
                    onPress={() => {
                        navigation.navigate("Page01",{
                            name:"动态的title"
                        })
                    }}/>
                <Button
                    title="go to Page02"
                    onPress={() => {
                        navigation.navigate("Page02")
                    }}/>
            </View>
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
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});
