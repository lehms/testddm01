import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Desenvolvimento de dispositivo moveis </Text>
      <Text>Leticia Beatriz Moura da Silva</Text>
      <Text>open up App.js to start working on yur app!</Text>
      <Text>clone do projeto aula 04-03-2024 3B3 lado A</Text>
      <Button title='Enviar'></Button>
      <StatusBar style="auto" />
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
