import React, {Component} from "react";
import PropTypes from 'prop-types';
import {StyleSheet, Text, View} from "react-native";

/*
* 方式一：ES6
* 强烈推荐
* */

export default class PropsTestComponent extends Component {
    static defaultProps = {
        name: "jp",
        age: 18,
        sex: "female"
    }
    static propTypes = {
        name: PropTypes.string,
        age: PropTypes.number,
        sex:PropTypes.string.isRequired
    }

    render() {
        return (
            <View>
                <Text style={{fontSize: 20, backgroundColor: "pink"}}>
                    姓名：{this.props.name}
                </Text>
                <Text style={{fontSize: 20, backgroundColor: "pink"}}>
                    年龄：{this.props.age}
                </Text>
                <Text style={{fontSize: 20, backgroundColor: "pink"}}>
                    性别：{this.props.sex}
                </Text>
            </View>
        )
    }
}