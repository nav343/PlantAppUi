import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import Header from "../Components/Home/Header";

export default function AboutPlant({ navigation }) {
  return (
    <ScrollView showsVerticalScrollIndicator={false}>
      <View style={{ marginHorizontal: 10 }}>
        <HeaderSection navigation={navigation} />
        <PlantName />
        <PriceControl />
        <PlantText />
      </View>
      <BuyPlantButton />
      <StatusBar backgroundColor={null} />
    </ScrollView>
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
        -- {"  "} 1 {"  "} +
      </Text>
    </View>

    <View>
      <Text style={{ fontSize: 25, fontWeight: "bold", color: "#01a568" }}>
        ₹ 395.00
      </Text>

      <View style={{ flexDirection: "row" }}>
        <Text style={{ textDecorationLine: "line-through", color: "grey" }}>
          ₹ 600.00
        </Text>
        <Text style={{ color: "#E60026" }}>(34% OFF)</Text>
      </View>
    </View>
  </View>
);

const PlantText = () => (
  <View style={{ marginTop: 20, paddingBottom: 20 }}>
    <Text style={{ color: "grey", fontSize: 14 }}>
      Phytolacca americana, also known as American pokeweed, pokeweed, poke
      sallet, dragonberries, and inkberry, is a poisonous, herbaceous perennial
      plant in the pokeweed family Phytolaccaceae. This pokeweed grows 4 to 10
      feet. It has simple leaves on green to red or purplish stems and a large
      white taproot. The flowers are green to white, followed by berries which
      ripen through red to purple to almost black which are a food source for
      songbirds such as gray catbird, northern mockingbird, northern cardinal,
      and brown thrasher, as well as other birds and some small animals.
    </Text>
  </View>
);

const BuyPlantButton = () => {
  const [saved, setSaved] = useState(
    "https://th.bing.com/th/id/OIP.FcNpoxXUcYtO9ahq0uMIkwHaHa?pid=ImgDet&rs=1"
  );
  return (
    <View
      style={{
        marginHorizontal: 10,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        marginBottom: 20,
      }}
    >
      <TouchableOpacity
        onPress={() =>
          setSaved("https://img.icons8.com/ios-glyphs/50/fa314a/like.png")
        }
        onLongPress={() =>
          setSaved(
            "https://th.bing.com/th/id/OIP.FcNpoxXUcYtO9ahq0uMIkwHaHa?pid=ImgDet&rs=1"
          )
        }
        style={{
          backgroundColor: "#fff",
          borderRadius: 200,
          width: 60,
          height: 65,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          source={{
            uri: saved,
          }}
          style={{
            width: 40,
            height: 40,
          }}
        />
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: 310,
          backgroundColor: "#01a568",
          paddingVertical: 10,
          borderRadius: 200,
        }}
      >
        <Text style={{ fontSize: 20, fontWeight: "bold", color: "#fff" }}>
          Add to Cart
        </Text>
      </TouchableOpacity>
    </View>
  );
};
