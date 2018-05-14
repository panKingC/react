import React , { Component}  from "react";
import {StyleSheet, Text, View, TouchableWithoutFeedback, TouchableOpacity,TouchableHighlight, TouchableNativeFeedback, Alert} from "react-native";
export default class TouchableTest extends Component{
    constructor(props){
        super(props);
        this.state = ({
            count:0,
            loadingText:"等待登录",
            waiting:false,
            onUnderlayText:"no oprate",
        })
    }
    render(){
        return(
            <View>
                <TouchableOpacity
                    activeOpacity={0.4}
                    onPress={()=>{
                        this.setState({
                            count:this.state.count+1
                        })
                    }}

                    onLongPress={()=>{
                        Alert.alert("longTap！！！","delete?",[
                            {text:"cancel",onPress:()=>{},style:'cancel'},
                            {text:"sure",onPress:()=>{}}
                        ]);
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>click</Text>
                    </View>
                </TouchableOpacity>
                <Text style={styles.text}>TouchableWithoutFeedback {this.state.count}</Text>

                <TouchableHighlight
                    disabled={this.state.waiting}
                    onPress={()=>{
                        this.setState({
                            loadingText:"正在登录...",
                            waiting:true
                        });
                        setTimeout(()=>{
                            this.setState({
                                loadingText:"网络请求超时",
                                waiting:false
                            })
                        },3000)
                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>点击登录</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>{this.state.loadingText}</Text>

                <TouchableHighlight
                    style={styles.button}
                    activeOpacity={0.5}
                    underlayColor="blue"
                    onHideUnderlay={()=>{
                        this.setState({
                            onUnderlayText:"onHideUnderlay"
                        })
                    }}
                    onShowUnderlay={()=>{
                        this.setState({
                            onUnderlayText:"onShowUnderlay"
                        })
                    }}
                    onPress={()=>{

                    }}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>underlayColor</Text>
                    </View>
                </TouchableHighlight>
                <Text style={styles.text}>{this.state.onUnderlayText}</Text>


                {/*仅支持android，ios下会报错*/}
                <TouchableNativeFeedback
                    background={TouchableNativeFeedback.SelectableBackground()}
                >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>TouchableNativeFeedBack</Text>
                    </View>
                </TouchableNativeFeedback>
                <Text style={styles.text}>TouchableNativeFeedBack</Text>
            </View>


        )
    }
}

const styles = StyleSheet.create({
    button:{
        borderWidth:1,
        borderRadius:5,
        backgroundColor:"pink"
    },
    buttonText:{
        fontSize:18
    },
    text:{
        fontSize:20
    }
})