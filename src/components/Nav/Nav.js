import { View, Text } from "react-native";
import styles from "./style";
import { Ionicons } from '@expo/vector-icons';



export default function Header() {
  return (
    <View style={styles.header}>
      <View style={styles.headerPrincipal}>
        <Ionicons name="ios-menu" size={35} color="white" />
        <Text style={styles.nomeLoja}>Filmes</Text>
        <View style={styles.icones}>
        
         
        </View>
      </View>
    </View>
  );
}