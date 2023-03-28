import { StyleSheet, View, ScrollView } from "react-native";
import Card from "./src/components/Card";
import Nav from "./src/components/Nav/Nav";

export default function App() {
  return (
    <ScrollView>
      <Nav />
      <View style={styles.container}>
        <View style={styles.Conteudo}>
          <View style={styles.main}>
            <Card
              caminho={{
                uri: "https://capas-m.imagemfilmes.com.br/164069_000_m.jpg",
              }}
              titulo="O Grande Mauricinho"
             
            />
            <Card
              caminho={{
                uri: "https://br.web.img2.acsta.net/pictures/22/07/14/15/49/5560820.jpg",
              }}
              titulo="Fera"
             
            />
            <Card
              caminho={{
                uri: "https://br.web.img3.acsta.net/c_310_420/pictures/23/02/27/22/17/0078543.jpg",
              }}
              titulo="Creed II"
             
            />
            <Card
              caminho={{
                uri: "https://br.web.img3.acsta.net/c_310_420/pictures/23/03/07/17/53/2916495.jpg",
              }}
              titulo="SHAZAM!"
             
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
    backgroundColor: "#EFEDF4",
  },
  Conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 20,
    alignItems: "center",
    width: "10-0%",
  },
  main: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
  },
});
