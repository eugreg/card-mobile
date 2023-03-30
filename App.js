import {Component} from 'react'
import { ScrollView } from 'react-native';
import {  View, StyleSheet } from "react-native";
import Card from "./src/components/Card";
import Nav from './src/components/Nav/Nav'

export default class App extends Component {
  state = {
    filmes : [
      {
        id: 1,
        caminho: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/02/27/20/23/5860378.png',
        titulo: 'DEMON SLAYER: PARA A VILA DO ESPADACHIM ',
      },
      {
        id: 2,
        caminho: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/03/07/17/53/2916495.jpg',
        titulo: 'SHAZAM! FÚRIA DOS DEUSES',
      
      },
      {
        id: 3,
        caminho: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/01/19/16/50/3168009.jpg',
        titulo: 'PÂNICO 6',
      },
      {
        id: 4,
        caminho: 'https://br.web.img3.acsta.net/c_310_420/pictures/23/02/27/22/17/0078543.jpg',
        titulo: 'CREED III',
     
      },
      {
        id: 5,
        caminho: 'https://br.web.img2.acsta.net/c_310_420/pictures/23/02/28/18/38/4152410.jpg',
        titulo: '65: AMEAÇA PRÉ-HISTORICA',
       
      },
    ]
  } 

  deletar(pos) {
    const filmes = [...this.state.filmes]
    filmes.splice(pos, 1)
    this.setState({ filmes } )    
  }

  render() {
    return (
      <ScrollView>

      <Nav/>
     
        <View style={styles.conteudo}>
          {this.state.filmes.map((filme, index) => (
            <Card key={index} filme={filme} onDelete={() => this.deletar(index)}/>          
            ))}
        </View>
      
            </ScrollView>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30, 
    alignItems: 'center',
    justifyContent: 'center',
  },
  conteudo: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '100%'
  },
});