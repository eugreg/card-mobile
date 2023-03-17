import { Component } from "react";
import { View, Text, Image } from "react-native";

export default class Card extends Component{
    state = {
        luffy : require('../fotos/luffy.jpg')
    }
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
               
                />
            <Text> {this.props.titulo} </Text> 
        </View>
    )
}
}