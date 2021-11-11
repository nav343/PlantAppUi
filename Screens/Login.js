import React from "react";
import { ImageBackground } from "react-native";
import LoginForm from "../Components/Login/LoginForm";
import LoginHeader from "./../Components/Login/LoginHeader";
import LoginWithSm from "./../Components/Login/LoginWithSm";

export default function Login({ navigation }) {
  return (
    <ImageBackground
      style={{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}
      source={{
        uri: "https://image.freepik.com/free-photo/vertical-shot-houseplant-concrete-flowerpot-white-background_181624-19544.jpg",
      }}
    >
      <LoginHeader />
      <LoginForm navigation={navigation} />
      <LoginWithSm navigation={navigation} />
    </ImageBackground>
  );
}
