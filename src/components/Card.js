import { Component } from "react";
import { View, Text, Image,StyleSheet } from "react-native";


export default class Card extends Component{
    //  image  = {
    //     luffy : require(" ./fotos/luffy.jpg")
    // }
    render(){
      
        return(
        <View >
            <Image
                style={{
                    borderColor: 'red',
                    borderWidth: 5,
                    height: 100,
                    width: 200,
                }}
                source={this.props.caminho}
                />
            <Text> {this.props.titulo} </Text> 
        </View>
    )
}
}
