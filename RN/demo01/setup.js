import React, {Component} from "react";
import {AppRegistry, StyleSheet, Text, View, ScrollView} from "react-native";
import HelloComponent from "./HelloComponent";
import LifecycleComponent from "./lifeCycleComponent";
import EIComponent, {name, age, sum} from "./EIComponent";
import PropsTestComponent from "./PropsTestComponent";
import StateComponent from "./stateComponent";
import RefTestComponent from "./RefTestComponent";
import Student from "./student";
import JJstudetnt from "./JJstudent";
import FlexBoxText from "./flexboxTest";
import TouchableTest from "./TouchableTest";
import ImageTest from "./ImageTest";

// import WelcomeText from "../example/react-native/local-cli/templates/HelloNavigation/views/welcome/WelcomeText.android";



export default class setup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            remove: false,
            res: 0,
            size:0
        }
        this.stu = new Student("tatum","male",20);
        this.JJstu = new JJstudetnt();
    }

    render() {
        var params = {
            name:"kingss",
            age:27,
            sex:"maless"
        }

        var {name,sex} = params;
        var view = this.state.remove ? null : <LifecycleComponent/>;
        var text = this.state.remove ? "昨日重现" : "滚犊子";
        return (
            <ScrollView style={styles.container}>
                <ImageTest/>
                <TouchableTest/>
                <FlexBoxText/>
                <Text>{this.JJstu.getDescription()}</Text>
                <Text>{this.stu.getDescription()}</Text>
                <Text
                    style={{fontSize:20}}
                    onPress={()=>{
                        // this.refs['reftest']
                        // var size = this.refs.reftest.getSize();
                        var size = this.reftest.getSize();
                        this.setState({
                            size:size
                        })
                    }}>获取size大小{this.state.size}</Text>
                <RefTestComponent
                    // ref="reftest"
                    ref={reftest=>this.reftest=reftest}

                />
                <StateComponent/>

                {/*<PropTestComponent name="king" age={27} sex="male" />*/}

                {/*延展操作符*/}
                {/*<PropsTestComponent {...params}/>*/}

                {/*结构赋值*/}
                <PropsTestComponent name={name} sex={sex}/>
                <EIComponent/>
                <Text> {name}</Text>
                <Text> {age}</Text>
                <Text
                    onPress={() => {
                        var res = sum(7, 8);
                        this.setState({
                            res: res
                        })
                    }}>onPress {this.state.res}</Text>
                {/*<script src="http://localhost:8097"></script>*/}
                <Text
                    style={{fontSize: 30}}
                    onPress={() => {
                        this.setState({
                            remove: !this.state.remove,
                        })
                    }}
                >{text}</Text>
                {view}
            </ScrollView>
        )
        // {/*<View style={styles.container}>*/}
        //     {/*<LifecycleComponent />*/}
        //     {/*<HelloComponent name="JP"/>*/}
        //     {/*<Text style={styles.welcome}>*/}
        //         {/*Welcome constructor React Native!!*/}
        //     {/*</Text>*/}
        //     {/*<Text style={styles.instructions}>*/}
        //         {/*instructions*/}
        //     {/*</Text>*/}
        // {/*</View>*/}

    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#f5fcff",
        marginTop: 50,
    },
    welcome: {
        fontSize: 20,
        textAlign: "center",
        margin: 10
    },
    instructions: {
        textAlign: "center",
        color: "#333333",
        marginBottom: 5
    }
})


