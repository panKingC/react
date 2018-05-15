import React, {Component} from 'react';
import {
    StyleSheet,
    Text,
    View,
    Image,
    Navigator
} from 'react-native';
import A from "../A";

export default class TabPopular extends Component {
    render() {
        return (
            <View style={styles.container}>
                {/*<Text style={{color: "red"}}>TabPopular</Text>*/}
                <Navigator style={styles.navigator}
                    initialRoute={{
                        component: A
                    }}
                    renderScene={(route, navigator) => {
                        let Component = route.component;
                        return <Component navigator={navigator} {...route.params}/>
                    }}
                >
                </Navigator>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    navigator: {
        flex: 1,
        width:750,
        height: 500,
        // justifyContent: 'center',
        // alignItems: 'center',
    }
})
