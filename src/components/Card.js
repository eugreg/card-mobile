import { Component } from "react";
import { View, Text, Image, StyleSheet } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'


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
    fontWeight:'bold',
    color: '#EFEDF4'
   
  },

  Card: {
    width: "35%",
    height: 250,
    backgroundColor: "black",
    borderRadius: 10,
    margin: 12,
    
  },
})
