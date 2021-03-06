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
    TextInput
} from 'react-native';

export default class Page02 extends Component {
    render() {
        const {navigation} = this.props;
        const {state,setParams} = navigation;
        const {params} = state;
        // const showText = params.mode === "edit"?"正在编辑":"编辑完成";
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    000Page02
                </Text>
                <Button
                    title = "改变主题"
                    onPress = {()=>{
                        navigation.setParams({
                            theme:{
                                tintColor:"red",
                                updateTime:new Date().getTime()
                            }
                        });
                    }}
                />
                <Button
                    title = "go to Page01"
                    onPress = {()=>{
                        // navigation.goBack();
                        navigation.navigate("Page01");
                    }}
                />
                {/*<Text>{showText}</Text>*/}
                <TextInput
                    style={styles.input}
                    onChangeText={text =>{
                        setParams({title:text})
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
        backgroundColor: "#ffffff",
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
    input:{
        width:200,
        height:50,
        borderWidth:1,
        marginTop:20,
        borderColor:"black"
    }
});
