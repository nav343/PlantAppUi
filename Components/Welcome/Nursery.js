import React from "react";
import { Text, TouchableOpacity } from "react-native";

export default function Nursery({ navigation }) {
  return (
    <TouchableOpacity
      onPress={() => navigation.push("LoginScreen")}
      activeOpacity={0.4}
      style={{
        width: 300,
        height: 300,
        backgroundColor: "#fff",
        borderRadius: 200,
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Text style={{ color: "#00a262", fontWeight: "bold", fontSize: 55 }}>
        Nursery
      </Text>
      <Text style={{ fontSize: 17, marginTop: -10 }}>Plants Pack</Text>
    </TouchableOpacity>
  );
}
