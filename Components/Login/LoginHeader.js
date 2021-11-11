import React from "react";
import { View, Text } from "react-native";

export default function LoginHeader() {
  return (
    <View
      style={{
        borderRadius: 300,
        width: 160,
        height: 160,
        marginTop: 40,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOpacity: 0.9,
        shadowOffset: { width: -20, height: 200 },
        elevation: 20,
        shadowRadius: 100,
      }}
    >
      <Text style={{ fontSize: 25, color: "#00a262", fontWeight: "bold" }}>
        NURSERY
      </Text>
      <Text
        style={{
          marginTop: -5,
          fontSize: 13,
        }}
      >
        Plants Pack
      </Text>
    </View>
  );
}
