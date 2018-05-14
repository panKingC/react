import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

/*导入常量及变量*/
const name = "jp";
var age = "27";
export {name, age};

/*导入方法*/
export function sum(a, b) {
    return a + b;
}

/*
* 方式一：ES6
* 强烈推荐
* */

export default class EIComponent extends Component {
    render() {
        return (
            <Text style={{fontSize: 20, backgroundColor: "pink"}}>
                EIComponent
            </Text>
        )
    }
}