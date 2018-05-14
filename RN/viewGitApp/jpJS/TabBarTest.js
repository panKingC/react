import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';
import TabNavigator from "react-native-tab-navigator";
import TabTrending from "./TabBottom/TabTrending";
import TabUser from "./TabBottom/TabUser";
import TabPopular from "./TabBottom/TabPopular";
import TabFavorite from "./TabBottom/TabFavorite";
// import EasyToast from "react-native-easy-toast";

export default class TabBarTest extends Component {
    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         selectedTab: "home"
    //     }
    // }
    constructor(props) {
        super(props);
        this.state = {
            selectedTab: "tb_popular"
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <TabNavigator>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_popular'}
                        title="最热"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require("../res/images/ic_polular.png")}
                                                 style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={require("../res/images/ic_polular.png")}
                                                         style={[styles.image,{tintColor:"red"}]}/>}
                        onPress={() => this.setState({selectedTab: 'tb_popular'})}>
                        <TabPopular/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_trending'}
                        title="趋势"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require("../res/images/ic_trending.png")}
                                                 style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={require("../res/images/ic_trending.png")}
                                                         style={[styles.image,{tintColor:"red"}]}/>}
                        onPress={() => this.setState({selectedTab: 'tb_trending'})}>
                        <TabTrending/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_favorite'}
                        title="收藏"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require("../res/images/ic_favorite.png")}
                                                 style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={require("../res/images/ic_favorite.png")}
                                                         style={[styles.image,{tintColor:"red"}]}/>}
                        onPress={() => this.setState({selectedTab: 'tb_favorite'})}>
                        <TabFavorite/>
                    </TabNavigator.Item>
                    <TabNavigator.Item
                        selected={this.state.selectedTab === 'tb_my'}
                        title="我的"
                        titleStyle={styles.tabText}
                        selectedTitleStyle={styles.selectedTabText}
                        renderIcon={() => <Image source={require("../res/images/ic_my.png")}
                                                 style={styles.image}/>}
                        renderSelectedIcon={() => <Image source={require("../res/images/ic_my.png")}
                                                         style={[styles.image,{tintColor:"red"}]}/>}
                        onPress={() => this.setState({selectedTab: 'tb_my'})}>
                        <TabUser/>
                    </TabNavigator.Item>
                </TabNavigator>
            </View>
        )
    }

    componentWillMount() {
        console.log("坎坎坷坷喀喀喀7777");
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
    },
    text: {
        color: "green",
        fontSize: 30
    },
    tabText: {
        color: '#000000',
        fontSize: 10
    },
    selectedTabText: {
        color: '#D81E06'
    },
    image: {
        width: 22,
        height: 22
    },
    pageHome: {
        flex: 1,
        backgroundColor: "pink"
    },
    pageUser: {
        flex: 1,
        backgroundColor: "blue"
    }
})