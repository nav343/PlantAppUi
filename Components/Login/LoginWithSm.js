import React from "react";
import { View, Text, TouchableOpacity } from "react-native";

export default function LoginWithSm({ navigation }) {
  return (
    <View style={{ marginBottom: 20, alignItems: "center" }}>
      <LoginTxt />
      <LoginBtns navigation={navigation} />
    </View>
  );
}

const LoginTxt = () => (
  <>
    <Text style={{ fontWeight: "bold", fontSize: 17 }}>
      CONNECT WITH SOCIAL
    </Text>
  </>
);

const LoginBtns = ({ navigation }) => (
  <View style={{ flexDirection: "row", marginTop: 20, marginBottom: 20 }}>
    <TouchableOpacity
      onPress={() => navigation.push("HomeScreen")}
      style={{
        backgroundColor: "#fff",
        width: 170,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 100,
        marginRight: 10,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18 }}>Google</Text>
    </TouchableOpacity>

    <TouchableOpacity
      onPress={() => navigation.push("HomeScreen")}
      style={{
        backgroundColor: "#3a5a80",
        width: 170,
        paddingVertical: 10,
        alignItems: "center",
        borderRadius: 100,
      }}
    >
      <Text style={{ fontWeight: "bold", fontSize: 18, color: "#fff" }}>
        Facebook
      </Text>
    </TouchableOpacity>
  </View>
);
