import React , { Component}  from "react";
import {AppRegistry, StyleSheet, Text, View} from "react-native";

export default class StateComponent extends Component{
    state = {
        size:90
    }
    constructor(props){
        super(props);
        // this.state = {
        //     size:80,
        // }
    }

    render(){
        return (
            <Text style={{fontSize:20,backgroundColor:"pink"}}
                onPress={()=>{
                    this.setState({
                        size:this.state.size+10
                    })
                }}>
                StateComponent {this.state.size}
            </Text>
        )
    }
}