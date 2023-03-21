import { StyleSheet, View } from "react-native";
import Card from "./src/components/Card";

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.Conteudo}>
        <view style={styles.Card}>
          <Card
            titulo="cachoro"
            caminho={require("greg/src/fotos/luffy.jpg")}
          />
          <Card titulo="luffy" />
          <Card titulo="cachorro" />
        </view>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingTop: 10,
    marginTop: 40,
    backgroundColor: "#fff",
  },
  Conteudo: {
    flex: 1,
    backgroundColor: "#ccc",
    paddingTop: 10,
    alignItems: "center",
    width: "100%",
  },
  Card: {
    width: "40%",
    height: 300,
    backgroundColor: "green",
    borderRadius: 10,
  },
});
