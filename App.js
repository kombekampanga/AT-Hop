import "react-native-gesture-handler";
import React from "react";
import { View } from "react-native";
import HomeScreen from "./app/screens/HomeScreen";
import TagOnScreen from "./app/screens/TagOnScreen";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();

export default function App() {
  //return <HomeScreen />;
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="TagOn" component={TagOnScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
