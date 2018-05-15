import React, {Component} from 'react';
import {StyleSheet, Text, View, Image, Navigator, TouchableOpacity} from 'react-native';

import ToolBar from "./common/ToolBar";

export default class B extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }

    renderButton(image) {
        return <TouchableOpacity
            onPress={() => {
                this.props.navigator.pop();
            }}>
            <Image style={{width: 22, height: 22, margin: 5}} source={image}/>
        </TouchableOpacity>
    }

    render() {
        return (
            <View style={styles.container}>
                <ToolBar
                    title={"11PAGE B"}
                    style={{
                        backgroundColor: "green"
                    }}
                    leftButton={
                        this.renderButton(require("../res/images/ic_arrow_back_white_36pt.png"))
                    }
                    rightButton={
                        this.renderButton(require("../res/images/ic_star.png"))
                    }
                />
                <Text style={styles.text}>page B</Text>
                <Text style={styles.text}>back</Text>
                <Text style={styles.text}>{this.props.word}</Text>
                <Text style={styles.text}
                      onPress={() => {
                          this.props.onCallBack("獭兔？")
                          this.props.navigator.pop()
                      }}
                >tatum</Text>
                <Image source={require("../res/images/ic_star.png")} style={styles.backgImg}/>

            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        // width: 300,
        backgroundColor: "pink",
        // justifyContent: "center"
    },
    text: {
        textAlign: "center",
        fontSize: 24
    },
    toolImg: {
        width: 22,
        height: 22
    }
})