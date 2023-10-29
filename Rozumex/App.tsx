import React, { useState, useEffect } from "react";
import { View, StatusBar, Image, ScrollView } from "react-native";
import { useFonts, Rubik_900Black } from "@expo-google-fonts/rubik";
import { ScoreBar } from "./components/ScoreBar";
import RuneGroupIcon from "./assets/icons/rune_group_icon.svg";

import { CircleLevel } from "./components/CircleLevel";
export default function App() {
  let [fontsLoaded] = useFonts({
    Rubik_900Black,
  });

  if (!fontsLoaded) {
    return null;
  }
  return (
    <View className="px-4 w-full h-full flex-1 items-center justify-start bg-yellow-500 pt-20">
      <StatusBar barStyle={"default"} />

      <ScoreBar num1={21} num2={3} num3={284} />

      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        className="pt-10 h-full w-full relative"
      >
        <View className="absolute top-0 left-10">
          <CircleLevel num={1} />
        </View>

        <View className="absolute top-24 left-36">
          <CircleLevel num={2} />
        </View>

        <Image
          source={require("./assets/icons/rune_icon.png")}
          className="absolute top-36 left-16"
          style={{ width: 82, height: 82, objectFit: "contain" }}
        />

        <View className="absolute top-48 right-10">
          <CircleLevel num={3} />
        </View>

        <View className="absolute top-60 left-8">
          <CircleLevel num={4} />
        </View>

        <Image
          source={require("./assets/icons/rune_icon.png")}
          className="absolute top-72 right-16"
          style={{ width: 82, height: 82, objectFit: "contain" }}
        />

        <View className="absolute top-[370px] right-10">
          <CircleLevel num={6} />
        </View>

        <View className="absolute top-[410px] left-10">
          <CircleLevel num={5} />
        </View>

        <View className="absolute top-[480px] right-1/3">
          <CircleLevel num={7} />
        </View>

        <View className="absolute top-[540px] left-10">
          <CircleLevel num={8} />
        </View>

        <Image
          source={require("./assets/icons/rune_icon.png")}
          className="absolute top-[550px] right-10"
          style={{ width: 82, height: 82, objectFit: "contain" }}
        />
      </ScrollView>
    </View>
  );
}
