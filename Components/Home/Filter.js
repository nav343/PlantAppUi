import React from "react";
import { View, Text, Image, ScrollView } from "react-native";
import filterIcons from "../../Data/filterIcons";

export default function Filter() {
  return (
    <View
      style={{
        marginTop: 20,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-around",
      }}
    >
      {filterIcons.map((icon, index) => (
        <View style={{ alignItems: "center" }} key={index}>
          <View
            style={{
              backgroundColor: "#fff",
              padding: 3,
              borderRadius: 5,
            }}
          >
            <Image
              source={{ uri: icon.icon }}
              style={{ width: 60, height: 60, resizeMode: "contain" }}
            />
          </View>
          <Text style={{ fontWeight: "900", marginTop: 5 }}>
            {icon.iconName}
          </Text>
        </View>
      ))}
    </View>
  );
}
