import React, {Component} from 'react';
import {StyleSheet, Text, View, Navigator} from 'react-native';
export default class B extends Component{
    constructor(props){
        super(props);
        this.state = {

        }
    }

    render(){
        return (
            <View style={styles.container}>
                <Text style={styles.text}>page B</Text>
                <Text style={styles.text}>{this.props.word}</Text>
                <Text style={styles.text}
                    onPress={()=>{
                        this.props.onCallBack("獭兔？")
                        this.props.navigator.pop()
                    }}
                >tatum</Text>
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:"pink",
        justifyContent:"center"
    },
    text:{
        fontSize:24
    }
})