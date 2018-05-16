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

export default class Page04 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page04
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
                    title = "Go to Page05"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("Page05");
                    }}
                />

                {/*<Button*/}
                    {/*title = "改变主题"*/}
                    {/*onPress = {()=>{*/}
                        {/*navigation.setParams({*/}
                            {/*theme:{*/}
                                {/*tintColor:"orange",*/}
                                {/*updateTime:new Date().getTime()*/}
                            {/*}*/}
                        {/*})*/}
                    {/*}}*/}
                {/*/>*/}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'pink',
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
