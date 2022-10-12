import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.someAnotherStyling}>
        <Text>Hello World!!!!</Text>
      </View>
      <Text 
        // style={{margin: 16, borderColor: 'red', borderStyle: 'solid', borderWidth: 2, padding: 5}}
        style={styles.someAnotherStyling}
      >
        Another piece of text!
      </Text>
      <Button title='TAP ME!'/>
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
  someAnotherStyling: {
    margin: 16, 
    borderColor: 'red', 
    borderStyle: 'solid', 
    borderWidth: 2, 
    padding: 5,
  }
});
