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
    Button,
    Image
} from 'react-native';

export default class Page05 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page05
                </Text>

                <Button
                    title = "Open Drawer"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("DrawerOpen");
                    }}
                />

                <Button
                    title = "Toggle Drawer"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("DrawerToggle");
                    }}
                />

                <Button
                    title = "go to Page04"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("Page04");
                    }}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
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
