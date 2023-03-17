import { StyleSheet,  View } from 'react-native';
import Card from './src/components/Card';

export default function App() {
  return (
    <View style={styles.container}>
      <Card   source={this.props.luffy}/>
      <Card titulo="luffy"/>
      <Card titulo="cachorro"/>
    </View> 
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
