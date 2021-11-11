import React from "react";
import { View, Text, Image } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

export default function Header({ navigation }) {
  return (
    <View
      style={{
        marginTop: 50,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={{
            uri: "https://img.icons8.com/material-rounded/24/000000/circled-menu.png",
          }}
          style={{ width: 30, height: 30 }}
        />
      </TouchableOpacity>
      <View>
        <Image
          source={{
            uri: "https://img.icons8.com/ios/24/000000/appointment-reminders.png",
          }}
          style={{ width: 30, height: 30 }}
        />
        <View
          style={{
            width: 10,
            height: 10,
            borderRadius: 10,
            backgroundColor: "#E60626",
            position: "absolute",
            right: 4,
            top: -2,
            opacity: 0.6,
          }}
        />
      </View>
    </View>
  );
}
