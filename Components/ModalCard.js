import React from "react";
import { Text, Image, ScrollView, TouchableOpacity } from "react-native";
import modalCardData from "../Data/ModalCardData";

export default function ModalCard({ navigation }) {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      style={{ marginBottom: 30 }}
    >
      {modalCardData.map((plant, index) => (
        <TouchableOpacity
          onPress={() => navigation.push("AboutPlantScreen")}
          key={index}
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            borderRadius: 10,
            backgroundColor: "#fff",
            padding: 10,
            alignItems: "center",
          }}
        >
          <Image
            source={{
              uri: plant.imgUrl,
            }}
            style={{ width: 200, height: 200, borderRadius: 10 }}
          />
          <Text style={{ fontWeight: "bold", fontSize: 18 }}>
            {plant.plantName}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}
