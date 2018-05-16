import React from "react";
import {Button,StyleSheet, Platform, Image, ScrollView, SafeAreaView, DrawerItems} from "react-native";
import {StackNavigator, TabNavigator, TabBarBottom, DrawerNavigator} from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import HomePage from "../pages/HomePage";
import Page01 from "../pages/Page01";
import Page02 from "../pages/Page02";
import Page03 from "../pages/Page03";
import Page04 from "../pages/Page04";
import Page05 from "../pages/Page05";

class TabBarComponent extends React.Component {
    constructor(props) {
        super(props);
        this.theme = {
            tintColor: props.activeTintColor,
            updateTime: new Date().getTime(),
        };
    }

    render() {
        const {routes, index} = this.props.navigationState;
        const {theme} = routes[index];
        if (theme && theme.updateTime > this.theme.updateTime) {
            this.theme = theme;
        }
        return (<TabBarBottom
            {...this.props}
            activeTintColor={this.theme.tintColor || this.props.activeTintColor}
        />)
    }
}

export const DrawerNav = DrawerNavigator({
    Page04: {
        screen: Page04,
        navigationOptions: {
            drawerLabel: "Page04",
            drawerIcon: ({tintColor}) => (
                <Image style={[styles.icon, {tintColor: tintColor}]} source={require("../res/images/ic_my.png")}/>
            )
        }
    },
    Page05: {
        screen: Page05,
        navigationOptions: {
            drawerLabel: "Page05",
            drawerIcon: ({tintColor}) => (
                <Image style={[styles.icon, {tintColor: tintColor}]} source={require("../res/images/ic_trending.png")}/>
            )
        }
    }
},{
    initialRouteName:"Page05",
    contentOptions:{
        // activeTintColor:"e98"
    }
})

export const AppTabNavigator = TabNavigator({
    Page01: {
        screen: Page01,
        navigationOptions: {
            tabBarLabel: "首页",
            tabBarVisible: true, //是否隐藏标签栏。默认不隐藏(true)
            tabBarIcon: ({focused, tintColor}) => (
                // focused ?
                //     <Image style={{width: 22, height: 22}} source={require("../res/images/ic_star.png")}/>
                //     :
                    <Image style={[styles.icon, {tintColor: tintColor}]} source={require("../res/images/ic_polular.png")}/>

            )
        },

    },

    Page02: {
        screen: Page02,
        navigationOptions: {
            tabBarLabel: "推荐",
            tabBarIcon: ({tintColor, focused}) => (
                // focused ?
                //     <Image style={{width: 22, height: 22}} source={require("../res/images/ic_star.png")}/>
                //     :
                    <Image style={[styles.icon, {tintColor: tintColor}]} source={require("../res/images/ic_trending.png")}/>
            )
        }
    },
    Page03: {
        screen: Page03,
        navigationOptions: {
            tabBarLabel: "我的",
            tabBarIcon: ({tintColor, focused}) => (
                // focused ?
                //     <Image style={{width: 22, height: 22}} source={require("../res/images/ic_star.png")}/>
                //     :
                    <Image style={[styles.icon, {tintColor: tintColor}]} source={require("../res/images/ic_my.png")}/>
            )
        }
    },
}, {
    tabBarComponent: TabBarComponent,
    tabBarPosition: "bottom",
    lazy: true,
    tabBarOptions: {
        activeTintColor: '#06c1ae',
        inactiveTintColor: '#333333',
        style: {
            backgroundColor: '#ffffff'
        },
        labelStyle: {
            fontSize: 14, // 文字大小
        },
    }
})

export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page01: {
        screen: Page01,
        navigationOptions: ({navigation}) => ({
            gesturesEnabled: true,
            headerTitle: `${navigation.state.params.name}页面名称`
        })
    },
    Page02: {
        screen: Page02,
        navigationOptions: (props) => {
            const {navigation} = props;
            const {state, setParams} = navigation;
            const {params} = state;
            return {
                gesturesEnabled: true,
                headerTitle: params.title ? params.title : "PAGE02",
                headerRight: (
                    <Button
                        title={params.mode === "edit" ? "保存" : "编辑"}
                        onPress={() => {
                            setParams({
                                mode: params.mode === "edit" ? "" : "edit"
                            })
                        }}
                    />
                )
            }
        }
    },
    Page03: {
        screen: Page03,
        navigationOptions: {
            gesturesEnabled: true,
            mode: "screen",
            headerTitle: "333Page",
            headerTintColor: "pink",
            headerTitleStyle: {
                flex: 1,
                textAlign: 'left'
            }
        }
    },
    TabNav: {
        screen: AppTabNavigator,
        navigationOptions: {
            title: "this is TabNavgation"
        }
    },
    DrawerNav:{
        screen: DrawerNav,
        navigationOptions:{
            title:"This is DrawerNavigator"
        }
    }
}, {
    navigationOptions: {
        // header: null
    }
});

const styles = StyleSheet.create({
    icon:{
        width:22,
        height:22
    }
})