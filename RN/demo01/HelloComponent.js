import React , { Component}  from "react";
import {
    AppRegistry,
    StyleSheet,
    Text,
    View
} from "react-native";

/*
* 方式一：ES6
* 强烈推荐
* */

export default class HelloComponent extends Component{
    render(){
        return (
            <Text style={{fontSize:20,backgroundColor:"pink"}}>
                Hello Benjamin
            </Text>
        )
    }
}

/*方式二：ES5*/
// var HelloComponent = React.createClass({
//     render(){
//         return (
//             <Text style={{fontSize:20,backgroundColor:"pink"}}>
//                 Hi Daisy
//             </Text>
//         )
//     }
// })
// module.exports=HelloComponent;

/*方式三：
* 函数式
* 无状态，不能使用this
* */

// function HelloComponent(props){
//     return (
//         <Text style={{fontSize:20,backgroundColor:"pink"}}>
//             Hello Benjamin {props.name}
//         </Text>
//     )
// }
// module.exports = HelloComponent;





