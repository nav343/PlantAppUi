import { StatusBar } from "expo-status-bar";
import React from "react";
import { ScrollView, View } from "react-native";
import Header from "./../Components/Home/Header";
import AdBanner from "./../Components/Home/AdBanner";
import Filter from "../Components/Home/Filter";
import Banners from "./../Components/Home/Banners";
import ModalCard from "./../Components/ModalCard";

export default function Home({ navigation }) {
  return (
    <View
      style={{ backgroundColor: "#eaeef1", flex: 1, paddingHorizontal: 10 }}
    >
      <Header navigation={navigation} />
      <AdBanner />
      <ScrollView showsVerticalScrollIndicator={false}>
        <Filter />
        <Banners />
        <ModalCard />
      </ScrollView>
      <StatusBar style="dark" backgroundColor="#eaeef1" />
    </View>
  );
}
