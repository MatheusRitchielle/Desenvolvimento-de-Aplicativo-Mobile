import React from "react";
import Login from "./src/Screens/Login";
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from "@react-navigation/native"

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="Tela bonita" component={Login} />
      </Stack.Navigator>
    </NavigationContainer>
  )
};

export default App;