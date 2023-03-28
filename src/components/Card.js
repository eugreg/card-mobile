import { Component } from "react";
import { View, Text, Image, StyleSheet,  TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const handlePress = () => {}

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
        <TouchableOpacity onPress={handlePress}>
          <Icon name="star" size={29} color="red" />
          
        </TouchableOpacity>
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
