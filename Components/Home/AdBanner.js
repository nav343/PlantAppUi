import React from "react";
import { View, Text, Image } from "react-native";

export default function AdBanner() {
  return (
    <View
      style={{
        marginTop: 20,
        backgroundColor: "#f6edee",
        alignItems: "center",
        justifyContent: "space-between",
        flexDirection: "row",
        paddingHorizontal: 10,
        marginBottom: 10,
      }}
    >
      <View>
        <Text style={{ fontWeight: "bold", fontSize: 20 }}>Lovely Plants</Text>
        <Text style={{ fontWeight: "900", marginTop: 5 }}>
          Discount 20% off
        </Text>
        <Text style={{ fontWeight: "900", marginTop: -5 }}>
          For Lukani Members
        </Text>
      </View>
      <Image
        source={{
          uri: "https://o.remove.bg/downloads/c18106d0-1a83-4ed6-895a-a99b6134d756/image-removebg-preview.png",
        }}
        style={{
          width: 120,
          height: 120,
          transform: [{ rotate: "-20deg" }],
          marginBottom: 5,
        }}
      />
    </View>
  );
}
