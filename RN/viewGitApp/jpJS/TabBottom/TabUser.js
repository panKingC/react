import React, {Component} from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class TabUser extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color:"#999999"}}>TabUser</Text>
            </View>
        )
    }
}


const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        // width:750,
        backgroundColor:"yellow"
    }
})