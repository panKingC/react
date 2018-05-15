import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image
} from 'react-native';

export default class TabFavorite extends Component{
    render(){
        return(
            <View style={styles.container}>
                <Text style={{color:"#999999"}}>TabFavorite</Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor:"green"
    }
})
