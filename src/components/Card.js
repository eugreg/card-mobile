import { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";

export default class Card extends Component {
  //  image  = {
  //     luffy : require(" ./fotos/luffy.jpg")
  // }
  render() {
    return (
      <View style={styles.Card}>
        <Image
          style={{
            resizeMode: "stretch",
            height: 200,
          }}
          source={this.props.caminho}
        />
        <Text style={styles.titulo}> {this.props.titulo} </Text>
        <Text style={styles.sinopse}>{this.props.sinopse}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
    titulo: {
    fontSize:20,
    fontWeight:'bold'
   
  },
  sinopse:{
    fontSize: 10,
  },
  Card: {
    width: "40%",
    height: 300,
    backgroundColor: "#0d0",
    borderRadius: 10,
    
  },
})
