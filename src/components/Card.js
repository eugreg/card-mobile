import { Component } from "react";
import { View, Text, Image, StyleSheet,  TouchableOpacity } from "react-native";
import Icon from 'react-native-vector-icons/FontAwesome'

const handlePress = () => {}

export default function(props) {

    return (
      <View style={styles.Card}>
        <Image
          style={styles.filme}
          source={{uri: props.filme.caminho}}
        />
        <Text style={styles.titulo}> {props.filme.titulo} </Text>
        <TouchableOpacity
        style={styles.button}
        onPress={props.onDelete}>
        <Icon name="trash" size={29} color="red" />
      </TouchableOpacity>
      </View>
    );
  
}
const styles = StyleSheet.create({
    titulo: {
    fontSize:20,
    fontWeight:'bold',
    color: 'white'
   
  },
  filme: {
    resizeMode: 'stretch',
    width: '100%',
    height: 100,
  },
  Card: {
    width: "35%",
    height: 250,
    backgroundColor: "black",
    borderRadius: 10,
    margin: 12,
    
  },
  button: {
    alignItems: 'center',
    padding: 1
  }
})
