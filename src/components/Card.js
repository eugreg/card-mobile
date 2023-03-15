import { Component } from "react";
import { View, Text, Image } from "react-native";

export default class Card extends Component{

    render(){
        return(
        <View>
            <Image
                style={{
                    borderColor: 'red',
                    borderWidth: 5,
                    height: 100,
                    width: 200,
                }}
                source={require('../fotos/luffy.jpg')}
                />
            <Text></Text> 
        </View>
    )
}
}