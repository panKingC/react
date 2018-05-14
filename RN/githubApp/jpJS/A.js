import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator} from 'react-native';
import B from "./B";

export default class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flower: 0,
            word: ""
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Text style={styles.text}>AAAA</Text>
                <Text
                    style={styles.text}
                    onPress={() => {
                        this.props.navigator.push({
                            component:B,
                            params:{
                                word:"i come from A",
                                onCallBack:(word)=>{
                                    this.setState({
                                        word:word
                                    })
                                }
                            }
                        })
                    }}
                >navigator constructor B</Text>
                <Text style={styles.text}>{this.state.word}</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "blue",
        justifyContent: "center"
    },
    text: {
        fontSize: 20,
    }
})