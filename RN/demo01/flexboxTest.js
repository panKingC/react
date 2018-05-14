import React , { Component}  from "react";
import {StyleSheet, Text, View} from "react-native";

export default class FlexBoxText extends Component{
    render(){
        return (
            <View style={{flexDirection:"row",flexWrap:"wrap",justifyContent:"space-between", backgroundColor:"darkgray",marginTop:20}}>
                <View style={{width:50,height:40,backgroundColor:"darkcyan",marginTop:5}}>
                    <Text style={flexStyle.flexItem}>1</Text>
                </View>

                <View style={{width:50,height:40,backgroundColor:"darkcyan",marginTop:5}}>
                    <Text style={flexStyle.flexItem}>2</Text>
                </View>

                <View style={{width:50,height:40,backgroundColor:"darkcyan",marginTop:5}}>
                    <Text style={flexStyle.flexItem}>3</Text>
                </View>

                <View style={{width:50,height:40,backgroundColor:"darkcyan",marginTop:5}}>
                    <Text style={flexStyle.flexItem}>4</Text>
                </View>
            </View>
        )
    }
}

const flexStyle = {
    flexItem:{
        color:"#333333",
        textAlign:"center",
        fontSize:16,
        lineHeight:40,
        marginLeft:5,
        marginRight:5
    }
}