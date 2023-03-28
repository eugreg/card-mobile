import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  header: {
    backgroundColor: "#000",
    paddingHorizontal: 20,
    paddingVertical: 15,
    flexDirection: "column",
  },
  headerPrincipal: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  input: {
    width: "100%",
    borderRadius: 15,
    backgroundColor: "#f6f6f6",
    height: 40,
    marginTop: 10,
    paddingLeft: 10,
  },
  icones: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  iconeCarrinho: {
    marginRight: 10,
    flexDirection: "row",
  },
  carrinhoText: {
    backgroundColor: "#00c1ff",
    borderRadius: 50,
    paddingHorizontal: 3,
    height: 20,
  },
  nomeLoja: {
    fontWeight: "bold",
    fontSize: 26,
    color: "white",
  },
  button: {
    backgroundColor: "#00C1FF",
  },
  CarrinhoText: {
    color: "#FFF"
  }
});

export default styles;
