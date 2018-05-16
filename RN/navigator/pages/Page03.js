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
import Icon from "react-native-vector-icons/Ionicons";

export default class Page03 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page03
                </Text>
                <Button
                    title = "BACK"
                    onPress = {()=>{
                        navigation.goBack();
                    }}
                />
                <Icon name="md-home" size={15} color="red" />
                <Icon name="md-home" size={25} color="yellow" />
                <Icon name="md-home" size={35} color="black" />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'gray',
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
