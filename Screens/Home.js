import { StatusBar } from "expo-status-bar";
import React from "react";
import { View } from "react-native";
import Header from "./../Components/Home/Header";
import AdBanner from "./../Components/Home/AdBanner";
import Filter from "../Components/Home/Filter";
import Banners from "./../Components/Home/Banners";

export default function Home({ navigation }) {
  return (
    <View
      style={{ backgroundColor: "#eaeef1", flex: 1, paddingHorizontal: 20 }}
    >
      <Header navigation={navigation} />
      <AdBanner />
      <Filter />
      <Banners />
      <StatusBar style="dark" backgroundColor="#eaeef1" />
    </View>
  );
}
