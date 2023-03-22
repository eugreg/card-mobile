import { StyleSheet, View,ScrollView } from "react-native";
import Card from "./src/components/Card";

export default function App() {
  return (
    <ScrollView>

    <View style={styles.container}>
      <View style={styles.Conteudo}>
        <View style={styles.Card}>
          <Card
            caminho={{uri:'https://capas-m.imagemfilmes.com.br/164069_000_m.jpg'}}
            titulo="O Grande Mauricinho"
            sinopse="Mauricinho (Marcelo Adnet) é um gato muito esperto que inventa um golpe para ganhar dinheiro fácil..."
            />
            <Card
            caminho={{uri:'https://imagemfilmes.com.br/filme/a-profecia-do-mal'}}
            titulo="O Grande Mauricinho"
            sinopse="Mauricinho (Marcelo Adnet) é um gato muito esperto que inventa um golpe para ganhar dinheiro fácil..."
            
            />
            <Card
            caminho={{uri:'https://capas-m.imagemfilmes.com.br/164069_000_m.jpg'}}
            titulo="O Grande Mauricinho"
            sinopse="Mauricinho (Marcelo Adnet) é um gato muito esperto que inventa um golpe para ganhar dinheiro fácil..."
            />
            <Card
            caminho={{uri:'https://capas-m.imagemfilmes.com.br/164069_000_m.jpg'}}
            titulo="O Grande Mauricinho"
            sinopse="Mauricinho (Marcelo Adnet) é um gato muito esperto que inventa um golpe para ganhar dinheiro fácil..."
            />
        
     
        </View>
      </View>
    </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 40,
    backgroundColor: "#ecf0f1",
  },
  Conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 20,
    alignItems: "center",
    width: "100%",
    marginTop:15,
    
  },
  
});
