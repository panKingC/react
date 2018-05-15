import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator} from 'react-native';
import B from "./B";
import ToolBar from "./common/ToolBar";

export default class A extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flower: 0,
            word: "init"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar
                    title="PAGE A"
                    statusBar={
                        {
                            backgroundColor: "green"
                        }
                    }/>
                <Text style={styles.text}>AAAAAA</Text>
                <Text
                    style={styles.text}
                    onPress={() => {
                        this.props.navigator.push({
                            component: B,
                            params: {
                                word: "i come from A",
                                onCallBack: (word) => {
                                    this.setState({
                                        word: word
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
        // flex: 1,
        backgroundColor: "#ffffff",
        // justifyContent: "center",
    },
    text: {
        textAlign: "center",
        fontSize: 20,
        color: "red"
    }
})