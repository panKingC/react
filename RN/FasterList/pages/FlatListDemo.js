/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
    Platform,
    StyleSheet,
    Text,
    View,
    FlatList
} from 'react-native';
const CITY_NAMES = ["江西","云南","北京","广东","江苏","浙江","陕西","山西","重庆","四川","贵州"];
export default class FlatListDemo extends Component {
    _renderItem(data){
        return <View style={styles.item}>
            <Text style={styles.text}>{data.item}</Text>
        </View>
    }
    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.welcome}>
                    FlatListDemo
                </Text>
                <FlatList
                    data={CITY_NAMES}
                    renderItem = {(data)=>this._renderItem(data)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
        // backgroundColor: '#F5FCFF',
    },
    item:{
        backgroundColor:"#169",
        flex:1,
        height:200,
        marginRight:15,
        marginBottom:15,
        alignItems:"center",
        justifyContent:"center"
    },
    text:{
        color:"#ffffff",
        fontSize:24
    }
});
