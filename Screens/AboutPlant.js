import { StatusBar } from "expo-status-bar";
import React from "react";
import { View, Text, Image } from "react-native";
import Header from "../Components/Home/Header";

export default function AboutPlant({ navigation }) {
  return (
    <View style={{ marginHorizontal: 10 }}>
      <HeaderSection navigation={navigation} />
      <PlantName />
      <PriceControl />
      <StatusBar backgroundColor={null} />
    </View>
  );
}

const HeaderSection = ({ navigation }) => {
  return (
    <>
      <Header navigation={navigation} />
      <View
        style={{
          position: "absolute",
          backgroundColor: "#a8d1c3",
          width: 280,
          height: 700,
          left: 80,
          borderRadius: 200,
          transform: [{ rotate: "-50deg" }],
          zIndex: -1,
          top: -190,
        }}
      />
      <View style={{ alignItems: "center", marginTop: 40 }}>
        <Image
          source={{
            uri: "https://o.remove.bg/downloads/7de183ae-eca9-4811-add6-d4e01fdb137c/image-removebg-preview.png",
          }}
          style={{ width: 280, height: 340 }}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          alignSelf: "center",
          marginTop: 20,
        }}
      >
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "lightgrey",
            width: 16,
            height: 16,
          }}
        />
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "#01a568",
            width: 16,
            height: 16,
            marginHorizontal: 10,
          }}
        />
        <View
          style={{
            borderRadius: 10,
            backgroundColor: "lightgrey",
            width: 16,
            height: 16,
          }}
        />
      </View>
    </>
  );
};

const PlantName = () => (
  <View style={{ marginTop: 30 }}>
    <Text style={{ fontWeight: "bold", fontSize: 30 }}>Happy Poke</Text>
  </View>
);

const PriceControl = () => (
  <View
    style={{
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    }}
  >
    <View
      style={{
        backgroundColor: "lightgrey",
        paddingVertical: 10,
        width: 130,
        alignItems: "center",
        borderRadius: 100,
        marginTop: 20,
      }}
    >
      <Text style={{ fontSize: 20, fontWeight: "bold", color: "grey" }}>
        - {"  "} 1 {"  "} +
      </Text>
    </View>

    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#01a568" }}>
        ₹ 395.00
      </Text>
    </View>
  </View>
);
