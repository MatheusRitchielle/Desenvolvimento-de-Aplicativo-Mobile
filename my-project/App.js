import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Text } from 'react-native';
import Login from './login';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={{ display: "flex", flexDirection: "row", justifyContent: "space-between" }}>
        <View style={{alignItems: 'center',  height: 25, width: 25, backgroundColor: "grey", borderRadius: 100}}>
          <Text style={{fontWeight: 'bold'}}>X</Text>
        </View>
        <View style={{ height: 100, width: 100, backgroundColor: "blue" }} />
      </View>
      <Login />
    
  
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: 'flex',
    backgroundColor: '#fff',
    justifyContent: 'space-between',
  },
});