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
    constructor(props){
        super(props);
        this.mounted = true;
    }
    static navigationOptions = {
        title: "Home"
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
                        navigation.navigate("Page01", {
                            name: "动态的title"
                        })
                    }}/>
                <Button
                    title="go to Page02"
                    onPress={() => {
                        navigation.navigate("Page02", {
                            title: "动态的PAGE02"
                        })
                    }}/>
                <Button
                    title="go to Page03"
                    onPress={() => {
                        navigation.navigate("Page03")
                    }}/>
                <Button
                    title="go to TabNav"
                    onPress={() => {
                        navigation.navigate("TabNav")
                    }}/>
                <Button
                    title="go to DrawerNavigator"
                    onPress={() => {
                        navigation.navigate("DrawerNav")
                    }}/>
            </View>
        );
    }

    componentDidMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
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
