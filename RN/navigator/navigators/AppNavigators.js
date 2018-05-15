import {StackNavigator} from "react-navigation";
import HomePage from "../pages/HomePage";
import Page01 from "../pages/Page01";
import Page02 from "../pages/Page02";


export const AppStackNavigator = StackNavigator({
    HomePage: {
        screen: HomePage,
    },
    Page01: {
        screen: Page01,
        navigationOptions:({navigation})=>({
            title:`${navigation.state.params.name}页面名称`
        })
    },
    Page02: {
        screen: Page02,
        navigationOptions:{
            title:"Page02"
        }
    }
}, {
    navigationOptions: {
       // header: null
    }
});

