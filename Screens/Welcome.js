import { StatusBar } from "expo-status-bar";
import React from "react";
import { ImageBackground } from "react-native";
import Nursery from "../Components/Welcome/Nursery";

export default function Welcome({ navigation }) {
  return (
    <ImageBackground
      style={{
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: "100%",
      }}
      source={{
        uri: "https://image.freepik.com/free-vector/fresh-natural-green-monstera-deliciosa-leaves_53876-114387.jpg",
      }}
    >
      <Nursery navigation={navigation} />
      <StatusBar style="light" />
    </ImageBackground>
  );
}
