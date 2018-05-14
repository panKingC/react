import React, {Component} from "react";
import {StyleSheet, Text, View, Image} from "react-native";

export default class ImageTest extends Component {
    render() {
        return (
            <View>
                <Text>happy开心</Text>

                {/*本地静态图片*/}
                <Image
                    resizeMode={"center"}
                    style={ImageSty.img}
                    source={require("./source/images/rank.png")}
                />

                {/*网络图片*/}
                <Image
                    style={ImageSty.img}
                    source={{
                        uri: "https://goldtest.gold-gold.cn/images/changeImages/tijin_home_web.png"
                    }}
                />

                {/*原生图片资源*/}
                <Image
                    style={{
                        width:72,
                        height:72
                    }}
                    source={{uri:"ic_launcher"}}
                />
            </View>
        )
    }
}

const ImageSty = {
    img: {
        width: 500,
        height: 100
    }
}