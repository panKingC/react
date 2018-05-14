// import React , { Component}  from "../facebook/react/packages/react/src/ReactBaseClasses";
// import {
//     AppRegistry,
//     StyleSheet,
//     Text,
//     View
// } from "../facebook/react/packages/react-art";
import React , { Component}  from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";
export default class LifecycleComponent extends Component{
    constructor(props){
        super(props);
        this.state = {
            count:0
        }
    }
    //装载
    componentWillMount(){
        console.log("-----componentWillMount-----");
    }
    //更新
    componentDidMount(){
        console.log("-----componentDidMount-----");
    }

    //
    componentWillReceiveProps(newxProps){
        console.log("-----componentWillReceiveProps-----");
    }

    // shouldComponentUpdate(){
    //     console.log("-----shouldComponentUpdate-----");
    // }
//组件更新前调用方法
    componentWillUpdate(nextProps,nextState){
        console.log("-----componentWillUpdate-----");
    }
 //组件更新之后调用方法
    componentDidUpdate(){
        console.log("-----componentDidUpdate-----");
    }
    //组件卸载
    componentWillUnmount(){
        console.log("-----componentWillUnmount-----");
    }

    render(){
        console.log("-----render-----");
        return <View>
                <Text
                    style={{fontSize:30,backgroundColor:"rgba(0,0,0,.3)"}}
                    onPress={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                    }}
                >lifeCycle count {this.state.count}</Text>
            </View>
    }
}

