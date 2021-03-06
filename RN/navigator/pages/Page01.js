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

export default class Page01 extends Component {
    render() {
        const {navigation} = this.props;
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    Page01
                </Text>
                <Button
                    title = "go to Page02"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("Page02");
                    }}
                />
                <Button
                    title = "改变主题"
                    onPress = {()=>{
                        navigation.setParams({
                            theme:{
                                tintColor:"orange",
                                updateTime:new Date().getTime()
                            }
                        })
                    }}
                />
                <Image style={{width:60,height:60}} source={require("../res/images/ic_my.png")}/>
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
