import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Welcome from "./Screens/Welcome";
import Login from "./Screens/Login";
import Home from "./Screens/Home";
import AboutPlant from "./Screens/AboutPlant";

const Stack = createStackNavigator();

const HeaderOptions = {
  headerShown: false,
};

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="WelcomeScreen"
        screenOptions={HeaderOptions}
      >
        <Stack.Screen name="WelcomeScreen" component={Welcome} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="HomeScreen" component={Home} />
        <Stack.Screen name="AboutPlantScreen" component={AboutPlant} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
