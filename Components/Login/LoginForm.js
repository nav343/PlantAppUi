import React from "react";
import { View, Text, TextInput, TouchableOpacity } from "react-native";

export default function LoginForm({ navigation }) {
  return (
    <View style={{ alignItems: "center" }}>
      <Inputs />
      <ForgotPassword />
      <LoginBtn navigation={navigation} />
    </View>
  );
}

const Inputs = () => (
  <>
    <TextInput
      placeholder="Username"
      style={{
        width: 370,
        backgroundColor: "#d8e1ea",
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 20,
      }}
    />
    <TextInput
      placeholder="Password"
      style={{
        width: 370,
        backgroundColor: "#d8e1ea",
        borderRadius: 100,
        paddingVertical: 15,
        paddingHorizontal: 20,
        marginTop: 20,
      }}
    />
  </>
);

const ForgotPassword = () => (
  <View style={{ marginVertical: 20 }}>
    <Text style={{ color: "grey" }}>FORGOT PASSWORD</Text>
  </View>
);

const LoginBtn = ({ navigation }) => (
  <TouchableOpacity
    onPress={() => navigation.push("HomeScreen")}
    style={{
      backgroundColor: "#00a262",
      width: 370,
      borderRadius: 100,
      paddingVertical: 18,
      alignItems: "center",
    }}
  >
    <Text style={{ color: "#fff", fontSize: 15, fontWeight: "bold" }}>
      LOG IN
    </Text>
  </TouchableOpacity>
);
