import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class TabPopular extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color:"#999999"}}>TabPopular</Text>
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
        backgroundColor:"gray"
    }
})
