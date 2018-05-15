/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, {Component} from 'react';
import {AppRegistry, StyleSheet, Text, View, Image, Navigator} from 'react-native';
// import TabNavigator from "react-native-tab-navigator";
import A from "./jpJS/A";
import TabBarTest from "./jpJS/TabBarTest";

export default class viewGitApp extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedTab: "home"
    //     }
    // }

    render() {
        return (
            <View style={styles.container}>
                <TabBarTest/>
                {/*<Text>``2221111显示文本</Text>*/}
                {/*<Text>塔图姆</Text>*/}
                {/*<Navigator style={{width:750,height:500,backgroundColor:"red"}}*/}
                    {/*initialRoute={{*/}
                        {/*component: A*/}
                    {/*}}*/}
                    {/*renderScene={(route, navigator) => {*/}
                        {/*let Component = route.component;*/}
                        {/*return <Component navigator={navigator} {...route.params}/>*/}
                    {/*}}*/}
                {/*>*/}
                {/*</Navigator>*/}


                {/*<TabNavigator>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'home'}*/}
                {/*title="Home"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require("./res/images/ic_polular.png")}/>}*/}
                {/*renderSelectedIcon={() => <Image style={styles.image}*/}
                {/*source={require("./res/images/ic_my.png")}/>}*/}
                {/*badgeText="1"*/}
                {/*onPress={() => this.setState({selectedTab: 'home'})}>*/}
                {/*<View style={styles.pageHome}><Text>pageHome</Text></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*<TabNavigator.Item*/}
                {/*selected={this.state.selectedTab === 'user'}*/}
                {/*title="user"*/}
                {/*renderIcon={() => <Image style={styles.image} source={require("./res/images/ic_polular.png")}/>}*/}
                {/*renderSelectedIcon={() => <Image style={styles.image}*/}
                {/*source={require("./res/images/ic_my.png")}/>}*/}
                {/*onPress={() => this.setState({selectedTab: 'user'})}>*/}
                {/*<View style={styles.pageUser}><Text>pageUser</Text></View>*/}
                {/*</TabNavigator.Item>*/}
                {/*</TabNavigator>*/}
            </View>
        );
    }

    //装载
    componentWillMount() {

        console.log("-----componentWillMount-----");
    }

    //更新
    componentDidMount() {

        console.log("-----componentDidMount-----");
    }

    //
    componentWillReceiveProps(newxProps) {
        console.log("-----componentWillReceiveProps-----");
    }

    shouldComponentUpdate() {
        console.log("-----shouldComponentUpdate-----");
    }

//组件更新前调用方法
    componentWillUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        console.log("-----componentWillUpdate-----");
    }

    //组件更新之后调用方法
    componentDidUpdate() {
        console.log("-----componentDidUpdate-----");
    }

    //组件卸载
    componentWillUnmount() {
        console.log("-----componentWillUnmount-----");
    }


}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0,0,0,.2)',
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
    pageHome: {
        flex: 1,
        backgroundColor: "pink"
    },
    pageUser: {
        flex: 1,
        backgroundColor: "blue"
    },
    image: {
        width: 22,
        height: 22
    }
});

AppRegistry.registerComponent('viewGitApp', () => viewGitApp);
