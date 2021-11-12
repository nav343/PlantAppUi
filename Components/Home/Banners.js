import React from "react";
import { View, Text, ImageBackground } from "react-native";

export default function Banners() {
  return (
    <View style={{ marginTop: 30, marginHorizontal: 10 }}>
      <Banner1 />
      <Banner2 />
    </View>
  );
}

const Banner1 = () => (
  <ImageBackground
    style={{ width: "100%", height: 120 }}
    source={{
      uri: "https://img.freepik.com/free-photo/beautiful-house-plants-flower-pots-table_181624-23920.jpg?size=338&ext=jpg",
    }}
    borderRadius={10}
  >
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#333",
        opacity: 0.3,
      }}
    />
    <View style={{ position: "absolute" }}>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          marginLeft: 20,
          marginTop: 5,
        }}
      >
        Air Purifier
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          marginLeft: 20,
          marginTop: -5,
        }}
      >
        Plants
      </Text>
    </View>
  </ImageBackground>
);

const Banner2 = () => (
  <ImageBackground
    style={{ width: "100%", height: 120, marginTop: 20 }}
    source={{
      uri: "https://img.freepik.com/free-photo/beautiful-house-plants-flower-pots-table_181624-23920.jpg?size=338&ext=jpg",
    }}
    borderRadius={10}
  >
    <View
      style={{
        width: "100%",
        height: "100%",
        backgroundColor: "#4df948",
        opacity: 0.3,
      }}
    />
    <View
      style={{
        position: "absolute",
        width: "100%",
        height: "100%",
      }}
    >
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          marginLeft: 20,
          marginTop: 5,
          marginRight: 20,
          textAlign: "right",
        }}
      >
        Living Room
      </Text>
      <Text
        style={{
          fontSize: 30,
          fontWeight: "bold",
          color: "#fff",
          marginLeft: 20,
          marginTop: -5,
          marginRight: 20,
          textAlign: "right",
        }}
      >
        Plants
      </Text>
    </View>
  </ImageBackground>
);
