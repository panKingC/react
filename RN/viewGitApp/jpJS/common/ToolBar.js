import React, {Component, PropTypes} from 'react';
import {StyleSheet, Text, View, Image, StatusBar, Platform } from 'react-native';

const TOOL_BAR_HEIGHT_ANDROID = 50;
const TOOL_BAR_HEIGHT_IOS = 44;
const STATUS_BAR_HEIGHT = 20;

const StatusBarShape = {
    barStyle: PropTypes.oneOf(['light-content', 'default',]),
    hidden: PropTypes.bool,
    backgroundColor: PropTypes.string,
};
export default class ToolBar extends Component {
    static propTypes = {
        style: View.propTypes.style,
        title: PropTypes.string,
        titleView: PropTypes.element,
        hide: PropTypes.bool,
        leftButton: PropTypes.element,
        rightButton: PropTypes.element,
        statusBar:PropTypes.shape(StatusBarShape)
    }

    constructor(props) {
        super(props);
        this.state = {
            hide: false,
            title: ""
        }
    }

    // static defaultProps = {
    //     statusBar: {
    //         // barStyle: 'light-content',
    //         hidden: false,
    //     },
    // }
    render() {
        let status = <View style={[styles.statusBar,this.props.statusBar]}><StatusBar {...this.props.statusBar}/></View>;
        let titleView = this.props.titleView ? this.props.titleView :
            <Text style={styles.title}>{this.props.title}</Text>
        let content = <View style={styles.toolBar}>
            {this.props.leftButton}
            <View style={styles.titleViewContainer}>
                {titleView}
            </View>
            {this.props.rightButton}
        </View>
        return (
            <View style={[styles.container,this.props.style]}>
                {status}
                {content}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        // flex: 1,
        height: 50,
        backgroundColor: "gray"
    },
    toolBar: {
        justifyContent: "space-between",
        alignItems: "center",
        // height: (Platform.OS === "ios") ? TOOL_BAR_HEIGHT_IOS : TOOL_BAR_HEIGHT_ANDROID,
        height:50,
        flexDirection: "row"
    },
    titleViewContainer: {
        justifyContent: "center",
        alignItems: "center",
        position: "absolute",
        left: 40,
        right: 40,
        top: 0,
        bottom: 0
    },
    title: {
        fontSize: 20,
        color: "#ffffff"
    },
    statusBar: {
        height: (Platform.OS === "ios") ? STATUS_BAR_HEIGHT : 0,
    }
})